import { configureStore } from "@reduxjs/toolkit";
import objectsReducer from './features/objects/objectsSlice';
import usersReducer from './features/users/usersSlice';

export const store = configureStore({
    reducer: {
        objects: objectsReducer,
        users: usersReducer,
    }
})