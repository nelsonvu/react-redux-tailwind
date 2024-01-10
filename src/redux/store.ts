import { crawlerReducer } from '@frontend/handlers/crawler';
import { userReducer } from '@frontend/handlers/user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { userState: userReducer, crawlerState: crawlerReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
