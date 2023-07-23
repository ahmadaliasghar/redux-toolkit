import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
  {
    id: "1",
    title: "Learn React",
    content: "Sample Content is here",
    time: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Learn Next",
    content: "Sample Content is here",
    time: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            time: new Date().toISOString(),
            userId,
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
              },
          },
        };
      },
    },
    reactionsAdded(state, action) {
        const {postId, reaction} = action.payload;
        const existingPost = state.find(post => post.id === postId)
        if(existingPost) {
            existingPost.reactions[reaction]++
        }
    }
  },
});

export const showAllPosts = (state) => state.post;
export const { addPost, reactionsAdded } = postSlice.actions;
export default postSlice.reducer;
