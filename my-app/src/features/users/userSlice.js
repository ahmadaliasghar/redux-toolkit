import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit" 
import axios from "axios";

// const initialState = [{
//     id: 1,
//     name: "John Wick",
//   },
//   {
//     id: 2,
//     name: "Ellen Heir",
//   },]

const POST_URL = 'https://jsonplaceholder.typicode.com/users';

// const initialState = {
//   users: [],
//   status: 'idle', // idle, loading, succeeded, failed
//   error: null
// }
const initialState = []
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(POST_URL)
    return response.data;
  } catch (error) {
    return error.message;
  }
})


  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      
    },
    extraReducers(builder) {
      builder.addCase(fetchUsers.fulfilled, (state, action)=> {
        return action.payload;
      })
    }
  })

  export const selectAllUsers = (state) => state.users
  export default usersSlice.reducer