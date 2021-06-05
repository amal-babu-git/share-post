import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'
import postsReducer from '../features/postsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    post:postsReducer
  },
});
