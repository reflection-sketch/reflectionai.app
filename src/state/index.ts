import { configureStore } from '@reduxjs/toolkit'
// TOTD  There seems to be wrong
import { load, save } from 'next-redux-localstorage-simple'

import application from './application/reducer'
import { updateVersion } from './global/actions'
import transactions from './transactions/reducer'

const PERSISTED_KEYS: string[] = ['transactions', 'userWallet']

const store = configureStore({
  reducer: {
    application,
    // user,
    transactions
    // multicall,
    // users
  },
  // middleware: [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })],
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(save({ states: PERSISTED_KEYS })),
  preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
