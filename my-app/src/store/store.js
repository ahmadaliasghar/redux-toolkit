import { configureStore } from '@reduxjs/toolkit'
import postReducer from "../store/slice/PostSlice"
import userReducer from "../store/slice/UserSlice"
export const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer
  },
})