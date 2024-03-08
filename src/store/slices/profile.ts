import {createSlice} from '@reduxjs/toolkit'
import apiClient from 'spotify'


export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: []
    },
    reducers:{
        setProfile: (state, actions) => {
            state.profile = actions.payload
        }
    }
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer

export const fetchProfile = () => (dispatch: any) =>{
    apiClient.get("me")
            .then(res => {
                const data = res.data
                dispatch(setProfile(data))
            })
            .catch(err => console.log(err));
}