import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profileData',
    initialState: {
        profile: ""
    },
    reducers: {
        addProfileData: (currentstate, action) => {
            currentstate.profile = action.payload
        }
    }
})

export const {addProfileData} = profileSlice.actions