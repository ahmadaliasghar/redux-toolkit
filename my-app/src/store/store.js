import { configureStore } from '@reduxjs/toolkit'
import postReducer from "../store/slice/PostSlice"

export const store = configureStore({
  reducer: {
    post: postReducer
  },
})