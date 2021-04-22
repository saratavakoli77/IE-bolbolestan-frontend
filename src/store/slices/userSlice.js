import storage from '@/utils/storage';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: storage.getItem('user'),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      storage.setItem('user', action.payload);
    },
    logout(state) {
      state.user = null;
      storage.removeItem('user');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
