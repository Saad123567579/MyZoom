//authSlice.js
import {  createSlice } from '@reduxjs/toolkit';
//createAsyncThunk
const initialState = {
    user: null,
    status:"idle"

};




export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            //do nothing 
        },
    },
    extraReducers: (builder) => {
    },


});

export const { increment } = userSlice.actions;
export default userSlice.reducer;