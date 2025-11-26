/**
 * Redux Store Configuration
 *
 * This file sets up the Redux store for state management across the application.
 * Redux helps manage complex state that's shared between components.
 *
 * For Beginners:
 * - Redux is like a central storage for your app's data
 * - "Slices" are like different sections of your storage
 * - Actions are like requests to change the data
 * - Reducers are like the rules for how data changes
 */

import { configureStore } from '@reduxjs/toolkit'

// Import slices (we'll create these next)
// import authSlice from './slices/authSlice'
// import contentSlice from './slices/contentSlice'
// import uiSlice from './slices/uiSlice'

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // auth: authSlice,        // User authentication state
    // content: contentSlice,  // Dynamic content from CMS
    // ui: uiSlice,           // UI state (loading, modals, etc.)
  },
  // Middleware for handling async actions and API calls
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for Redux state
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

// Export types for TypeScript (if using TypeScript)
// NOTE:
// This project uses plain JavaScript, so we avoid TypeScript-specific
// `export type` declarations here. If you later migrate to TypeScript,
// rename this file to index.ts and re-add those types.

// Export the store as default
export default store
