import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    id:null,
    posts:[]

}

const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

        setPost: (state, action) => {

            state.id=action.payload.id
            state.posts=action.payload.posts
        }
    
    }
});

export const { setPost } = postsSlice.actions
export const selectId = (state) => state.post.id
export const selectPosts =(state)=>state.post.posts
export default postsSlice.reducer