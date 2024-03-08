import {createSlice} from '@reduxjs/toolkit'
import apiClient from 'spotify'

export const playlistsSlice = createSlice({
    name: "playlists",
    initialState:{
        playlists: []
    },
    reducers:{
        setPlaylists: (state, action) => {
            state.playlists = action.payload
        }
    }
})

export const {setPlaylists} = playlistsSlice.actions

export default playlistsSlice.reducer

export const fetchPlaylist = () => (dispatch: any) => {
    apiClient.get('/browse/featured-playlists')
    .then(res => {
        dispatch(setPlaylists(res.data.playlists.items))
    })
    .catch((err) => console.log(err));
}
