//authSlice.js
import {  createSlice } from '@reduxjs/toolkit';
//createAsyncThunk
const initialState = {
    user: null,
    otherusers:[],
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
        setuser: (state,action) => {
            state.user = action.payload;
        },
        appendotheruser: (state, action) => {
            const newUser = action.payload;
            const uniqueUserNames = new Set(state.otherusers.map(user => user.name));
            uniqueUserNames.add(newUser.name);
            const updatedUsers = [...uniqueUserNames].map(name => {
              const existingUser = state.otherusers.find(user => user.name === name);
              return existingUser || { name };
            });
          
            // Update the state with the array of unique users
            state.otherusers = updatedUsers;
          },
          
    },
    extraReducers: (builder) => {
    },


});

export const { increment , setuser ,appendotheruser} = userSlice.actions;
export default userSlice.reducer;