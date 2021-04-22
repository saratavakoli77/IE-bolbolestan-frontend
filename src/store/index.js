import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import coursesSlice from './slices/coursesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    courses: coursesSlice,
  },
});
