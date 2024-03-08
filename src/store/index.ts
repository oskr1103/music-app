import {configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import playlists from './slices/playlists'
import profile from './slices/profile'
import favorites from './slices/favorites'

const persistConfig = {
  key: 'favorites-slices',
  storage,
  whitelist: ['favorites']
};

const persistedReducer = persistReducer(persistConfig, favorites);

const reducers = combineReducers({
    playlists: playlists,
    profile: profile,
    favorites: persistedReducer
})


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector