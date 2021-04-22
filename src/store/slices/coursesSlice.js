import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    filters: {
      query: '',
      type: 'all',
    },
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCourses, updateFilters } = coursesSlice.actions;

export default coursesSlice.reducer;
