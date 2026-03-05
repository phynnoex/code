import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

//define store using configurestore from react toolkit
export const store = configureStore({
    reducer: counterReducer,
})

//return type of store.getState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;