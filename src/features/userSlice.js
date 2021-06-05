import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    userName: null,
    userEmail: null,
    profileUrl: null,

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.profileUrl = action.payload.profileUrl
        },
        setUserLogOut: (state) => {
            state.userName = null
            state.userEmail = null
            state.profileUrl = null
        }

    }
});

export const { setActiveUser, setUserLogOut } = userSlice.actions

export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail
export const selectProfileUrl = state => state.user.profileUrl

export default userSlice.reducer