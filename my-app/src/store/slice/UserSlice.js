import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: "Ahmad",},
    {id: '2', name: "Ali", },
    {id: '3', name: "Asghar", },
]

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:  {
    }
})
export const showUsers = (state) => state.user
export default userSlice.reducer