import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: [],
    loadingUser: false,
    errorUser: null,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserRequest: (state) => {
            state.loadingUser = true;
            state.errorUser = null;
        },
        fetchUserSuccess: (state, action) => {
            state.loadingUser = false;
            state.user = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.loadingUser = false;
            state.errorUser = action.payload;
        },
    }

});
export const {fetchUserFailure, fetchUserSuccess, fetchUserRequest} = userSlice.actions;
export default userSlice.reducer;