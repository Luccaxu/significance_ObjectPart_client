import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    objects: [],
    status: 'idle',
    error: null
}

export const fetchObjetcs = createAsyncThunk('objects/fetchObjetcs', async() => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

const objectsSlice = createSlice({
    name: 'objects',
    initialState,
    reducers: {
        objectAdded:{
            reducer(state, action) {
                state.objects.push(action.payload)
            },
            prepare(name, url, explorer) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        url,
                        explorer
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchObjetcs.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchObjetcs.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedObjects = action.payload.map( object => {
                    return object
                })
            })
            .addCase(fetchObjetcs.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllObjects = (state) => state.objects.objects

export const { objectAdded } = objectsSlice.actions

export default objectsSlice.reducer