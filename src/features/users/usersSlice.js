import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', explorer:'Dave'}, 
    {id:'1', explorer:'Lee'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer