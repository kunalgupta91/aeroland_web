'use strict';

const { google } = require('googleapis');
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

// ── Config ─────────────────────────────────────────────────────────────────────
const SITE_URL = 'sc-domain:aeroland.co.in';
const BASE_URL = 'https://aeroland.co.in';
const REPORT_DIR = path.join(__dirname, '..', 'seo-reports');

const TARGET_KEYWORDS = [
  'GMADA Aeroland',
  'Aeroland Mohali',
  'plots near Chandigarh airport',
  'GMADA township Punjab',
  'Aerocity Mohali plots',
  'Expo City Mohali investment',
  'Pocket A Pocket B Aeroland',
  'real estate near Chandigarh airport',
  'best investment opportunity',
];

const PAGES = [
  { path: '/',            title: "Aeroland — Punjab's Premier Airport Township | GMADA Mohali" },
  { path: '/about',       title: 'About Aeroland — GMADA Township Vision & Mission | Mohali Punjab' },
  { path: '/highlights',  title: 'Why Invest in Aeroland? — Key Highlights | GMADA Mohali Punjab' },
  { path: '/media',       title: 'Aeroland in the News — Press & Media Coverage | GMADA Punjab' },
  { path: '/location',    title: 'Aeroland Location — Adjacent to Chandigarh Airport | Aerocity Mohali' },
  { path: '/docs',        title: 'Aeroland Master Plan PDF — GMADA Official Documents | Punjab' },
  { path: '/contact',     title: 'Contact Aeroland — Register Your Plot Interest | GMADA Mohali' },
];

// ── GSC Auth ───────────────────────────────────────────────────────────────────
async function getGSCClient() {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!json) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON env var missing');
  const credentials = JSON.parse(json);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  return google.searchconsole({ version: 'v1', auth });
}

// ── Fetch GSC Data ─────────────────────────────────────────────────────────────
async function fetchGSCData(gsc) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 7);
  const fmt = (d) => d.toISOString().split('T')[0];

  const [queriesRes, pagesRes] = await Promise.all([
    gsc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: { startDate: fmt(start), endDate: fmt(end), dimensions: ['query'], rowLimit: 25, dataState: 'all' },
    }),
    gsc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: { startDate: fmt(start), endDate: fmt(end), dimensions: ['page'], rowLimit: 20, dataState: 'all' },
    }),
  ]);

  const keywordTracking = await Promise.all(
    TARGET_KEYWORDS.map(async (kw) => {
      try {
        const res = await gsc.searchanalytics.query({
          siteUrl: SITE_URL,
          requestBody: {
            startDate: fmt(start), endDate: fmt(end),
            dimensions: ['query'], rowLimit: 5, dataState: 'all',
            dimensionFilterGroups: [{
              filters: [{ dimension: 'query', operator: 'contains', expression: kw.toLowerCase() }],
            }],
          },
        });
        return { keyword: kw, rows: res.data.rows || [] };
      } catch (e) {
        return { keyword: kw, rows: [], error: e.message };
      }
    })
  );

  return {
    period: { start: fmt(start), end: fmt(end) },
    topQueries: queriesRes.data.rows || [],
    pagePerformance: pagesRes.data.rows || [],
    keywordTracking,
  };
}

// ── Claude Analysis ────────────────────────────────────────────────────────────
async function analyzeWithClaude(gscData) {
  const client = new Anthropic();

  const topQueriesSummary = gscData.topQueries.slice(0, 15)
    .map(r => `  - "${r.keys[0]}": ${r.clicks} clicks, ${r.impressions} impressions, pos ${r.position?.toFixed(1)}`)
    .join('\n') || '  (No data yet — site may be new or GSC not yet indexing)';

  const keywordSummary = gscData.keywordTracking
    .map(({ keyword, rows }) =>
      rows.length
        ? `  - "${keyword}": pos ${rows[0].position?.toFixed(1)}, ${rows[0].impressions} impressions`
        : `  - "${keyword}": NOT RANKING`
    ).join('\n');

  const pagesSummary = gscData.pagePerformance
    .map(r => `  - ${r.keys[0].replace(BASE_URL, '') || '/'}: ${r.clicks} clicks, pos ${r.position?.toFixed(1)}`)
    .join('\n') || '  (No page data yet)';

  const pageMetadata = PAGES.map(p => `  - ${p.path}: "${p.title}"`).join('\n');

  const prompt = `You are an SEO specialist analyzing aeroland.co.in — a GMADA (Government of Punjab) planned township adjacent to Chandigarh International Airport in Mohali, Punjab, India. Target audience: real estate investors and plot buyers.

## GSC Data — ${gscData.period.start} to ${gscData.period.end}

### Top Organic Queries:
${topQueriesSummary}

### Page Performance:
${pagesSummary}

### Target Keyword Rankings:
${keywordSummary}

### Current Page Titles:
${pageMetadata}

## Your Task

Provide the following in clean markdown:

1. **Executive Summary** (3–4 sentences): Overall SEO health this week.
2. **Top Keyword Opportunities** (5 bullets): Which target keywords to focus on and exactly how to improve them.
3. **Content Gaps** (3–5 bullets): Topics investors search for that the site doesn't cover yet.
4. **Quick Wins** (3 bullets): Specific changes under 1 hour each (e.g. "Update /highlights H1 to include 'plots near Chandigarh airport'").
5. **Metadata Rewrites**: Exact new title/description for any underperforming pages.
6. **#1 Priority This Week**: One single highest-impact action.

Be specific and data-driven. Under 800 words total.`;

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  });

  return msg.content[0].type === 'text' ? msg.content[0].text : '';
}

// ── Report Generator ───────────────────────────────────────────────────────────
function generateReport(gscData, analysis) {
  const today = new Date().toISOString().split('T')[0];

  const topQueriesTable = [
    '| Query | Clicks | Impressions | Avg Position |',
    '|-------|--------|-------------|--------------|',
    ...gscData.topQueries.slice(0, 15).map(r =>
      `| ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${r.position?.toFixed(1) ?? '—'} |`
    ),
  ].join('\n');

  const keywordTable = [
    '| Target Keyword | Status | Avg Position | Impressions |',
    '|----------------|--------|--------------|-------------|',
    ...gscData.keywordTracking.map(({ keyword, rows }) =>
      rows.length
        ? `| ${keyword} | Ranking | ${rows[0].position?.toFixed(1)} | ${rows[0].impressions} |`
        : `| ${keyword} | Not Ranking | — | 0 |`
    ),
  ].join('\n');

  const pagesTable = [
    '| Page | Clicks | Impressions | Avg Position |',
    '|------|--------|-------------|--------------|',
    ...gscData.pagePerformance.map(r =>
      `| ${r.keys[0].replace(BASE_URL, '') || '/'} | ${r.clicks} | ${r.impressions} | ${r.position?.toFixed(1) ?? '—'} |`
    ),
  ].join('\n');

  return `# Aeroland SEO Report — ${today}

> Weekly AI SEO Agent | Period: ${gscData.period.start} → ${gscData.period.end}

---

## AI Analysis

${analysis}

---

## Raw GSC Data

### Top Organic Queries (Last 7 Days)
${gscData.topQueries.length ? topQueriesTable : '_No query data yet._'}

### Page Performance
${gscData.pagePerformance.length ? pagesTable : '_No page data yet._'}

### Target Keyword Tracking
${keywordTable}

---
_Generated: ${new Date().toUTCString()} | Model: claude-sonnet-4-6 | Source: Google Search Console API_
`;
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log('Starting Aeroland SEO Agent...');
  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

  const today = new Date().toISOString().split('T')[0];
  const reportPath = path.join(REPORT_DIR, `${today}.md`);

  try {
    console.log('Fetching Google Search Console data...');
    const gsc = await getGSCClient();
    const gscData = await fetchGSCData(gsc);
    console.log(`Fetched ${gscData.topQueries.length} queries, ${gscData.pagePerformance.length} pages`);

    console.log('Calling Claude for SEO analysis...');
    const analysis = await analyzeWithClaude(gscData);

    const report = generateReport(gscData, analysis);
    fs.writeFileSync(reportPath, report, 'utf-8');
    console.log(`Report saved: ${reportPath}`);
  } catch (err) {
    console.error('SEO Agent error:', err);
    fs.writeFileSync(reportPath,
      `# Aeroland SEO Report — ${today}\n\n**Agent Error:** ${err.message}\n\nCheck GitHub Actions logs for details.\n`
    );
    process.exit(1);
  }
}

main();
