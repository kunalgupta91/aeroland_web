# Language Context Module - Planning

## Overview
React Context that manages bilingual language switching between English and Hindi throughout the entire application.

## Objectives
- Provide global language state management
- Support language-specific content retrieval
- Persist language preference
- Type-safe content access

## Key Features
1. **Language Switching**
   - Toggle between EN and HI
   - Persist selection in localStorage
   - Apply to all components

2. **Content Management**
   - Import both EN and HI JSON files
   - Type-safe `t` object return
   - Ensure identical structure for both languages

3. **Provider Pattern**
   - Context provider at root level
   - useLanguage hook for components
   - Memoization for performance

4. **Persistence**
   - Save language preference to localStorage
   - Restore on page load
   - Default to browser language or EN

## Dependencies
- React (useContext, createContext, useState, useEffect)
- TypeScript for type safety
- JSON content files

## Content Files
- `src/data/content.en.json`
- `src/data/content.hi.json`

## Technical Considerations
- Type-safe content access using `typeof`
- Prevent unnecessary re-renders
- Handle SSR properly (localStorage on client)
- Avoid hydration mismatch
