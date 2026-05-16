'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiPhone } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function PaymentPlanClient() {
  const { t } = useLanguage();
  const pp = t.payment_plan;

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {pp.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {pp.title}
        </motion.h1>
      </div>

      {/* Summary chips */}
      <section className="bg-green-50 border-b border-green-100 py-6 px-4">
        <div className="container-max flex flex-wrap justify-center gap-4">
          {[
            { label: pp.category_label, value: pp.category },
            { label: pp.size_label,     value: pp.size },
            { label: pp.bsp_label,      value: pp.bsp },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 bg-white border border-green-100 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xs text-green-600 font-semibold uppercase tracking-wide">{s.label}</span>
              <span className="w-px h-4 bg-green-200" />
              <span className="text-sm font-bold text-green-900">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl space-y-12">

          {/* Two payment tables side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Construction Linked */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-green-100 shadow-sm"
            >
              <div className="bg-green-800 px-6 py-4">
                <h2 className="text-white font-bold text-base">{pp.construction_title}</h2>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {pp.construction_plan.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                      <td className="px-5 py-3 text-gray-700 border-b border-green-50">{row.milestone}</td>
                      <td className="px-5 py-3 text-green-800 font-semibold border-b border-green-50 text-right whitespace-nowrap">{row.payment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Down Payment */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-green-100 shadow-sm"
            >
              <div className="bg-green-700 px-6 py-4 flex items-center justify-between">
                <h2 className="text-white font-bold text-base">{pp.down_payment_title}</h2>
                <span className="text-xs bg-white text-green-700 font-bold px-3 py-1 rounded-full">{pp.down_payment_discount}</span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {pp.down_payment_plan.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                      <td className="px-5 py-3 text-gray-700 border-b border-green-50">{row.milestone}</td>
                      <td className="px-5 py-3 text-green-800 font-semibold border-b border-green-50 text-right whitespace-nowrap">{row.payment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Other Charges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-green-100 shadow-sm"
          >
            <div className="bg-green-900 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold text-base">{pp.other_charges_title}</h2>
              <span className="text-xs text-green-300">{pp.other_charges_note}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {pp.other_charges.map((c, i) => (
                <div key={i} className={`px-5 py-3.5 flex justify-between items-start gap-4 border-b border-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-green-50'}`}>
                  <span className="text-sm text-gray-700">{c.label}</span>
                  <span className="text-sm text-green-800 font-semibold text-right">{c.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 border border-amber-100 rounded-2xl p-6"
          >
            <h3 className="font-bold text-amber-800 mb-3 text-sm">{pp.note_title}:</h3>
            <ol className="space-y-1.5 list-decimal list-inside">
              {pp.notes.map((note, i) => (
                <li key={i} className="text-xs text-amber-900 leading-relaxed">{note}</li>
              ))}
            </ol>
          </motion.div>

          {/* Contact + Download */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-green-50 border border-green-100 rounded-2xl px-6 py-5"
          >
            <div className="flex items-center gap-3 text-green-800">
              <FiPhone size={18} />
              <div>
                <p className="text-xs text-green-600 font-semibold">{pp.contact_label}</p>
                <p className="font-bold">{pp.contact_numbers}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="/payment_plan/payment-plan.jpg"
                download="Aeroland-Heights-Payment-Plan.jpg"
                className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-800 transition-all hover:scale-105 shadow-md"
              >
                <FiDownload /> {pp.download}
              </a>
            </div>
          </motion.div>

          {/* RERA */}
          <p className="text-center text-xs text-gray-400">
            RERA: {pp.rera} &nbsp;|&nbsp; rera.punjab.gov.in &nbsp;|&nbsp; A project by KS Developers
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-green-light py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-green-900 mb-4">
            Ready to Invest?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-green-800 transition-all hover:scale-105 shadow-lg"
          >
            Register Your Interest
          </a>
        </motion.div>
      </section>
    </div>
  );
}
