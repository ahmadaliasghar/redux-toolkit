import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit" 
import { sub } from "date-fns";
import axios from "axios"

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
// const initialState = [{
//     id: 1,
//     title: "First Post by Person One",
//     content: "This is the content of the first post by Person One.",
//     time: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0
//   }
//   },
//   {
//     id: 2,
//     title: "Second Post by Person One",
//     content: "This is the content of the second post by Person One.",
//     time: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0
//   }
//   },]
const initialState = {
  posts: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POST_URL)
    return response.data;
  } catch (error) {
    return error.message;
  }
})
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const response = await axios.post(POST_URL, initialPost)
  return response.data
})
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      addPost: {
        reducer(state, action) {
          state.posts.push(action.payload);
        },
        prepare(title, content, userID) {
          return {
            payload: {
              id: nanoid(),
              title,
              content,
              userID,
              time: new Date().toISOString(),
              reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
            },
          };
        },
      },
      addReactions(state, action) {
        const {postId, reaction} = action.payload; 
        const selectPost = state.posts.find(post => post.id === postId)
        if(selectPost) {
          selectPost.reactions[reaction]++;
        }
      }
    },
    extraReducers(builder) {
      builder
            .addCase(fetchPosts.pending, (state, action) => {
              state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
              state.status = 'succeeded'
              let min = 1;
              const loadedPost = action.payload.map((post) => {
                post.time = sub(new Date(), {minutes: min++}).toISOString();
                post.reactions =  {
                  thumbsUp: 0,
                  wow: 0,
                  heart: 0,
                  rocket: 0,
                  coffee: 0
              }
              return post;
              })
              state.posts = state.posts.concat(loadedPost);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
              state.status = 'failed'
              state.error = action.error.message
          })
          .addCase(addNewPost.fulfilled, (state, action) => {

            const sortedPosts = state.posts.sort((a, b) => {
                if (a.id > b.id) return 1
                if (a.id < b.id) return -1
                return 0
            })
            action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
            action.payload.userId = Number(action.payload.userId)
            action.payload.time = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
            console.log(action.payload)
            state.posts.push(action.payload)
        })
    }
  })

  export const {addPost, addReactions} = postsSlice.actions
  export const selectAllPosts = (state) => state.posts.posts
  export const getPostsStatus = (state) => state.posts.status
  export const getPostsError = (state) => state.posts.error

  export default postsSlice.reducer