import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlaylistObject } from 'interface/interface'

export type FavoriteStateType = {
    favorites: IPlaylistObject[]
}

const initialState = {
    favorites: [],
} as FavoriteStateType

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<IPlaylistObject>) => {
            state.favorites.push(action.payload)
        },
        deleteFavorites: (state, action: PayloadAction<String>) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload
            )
        },
    },
})

export const { deleteFavorites, setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
