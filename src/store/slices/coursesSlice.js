import $api from '@/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPickedCourses = createAsyncThunk(
  'courses/fetchPickedCourses',
  async () => {
    return $api.courses.fetchPickedCourses();
  }
);

export const pickCourse = createAsyncThunk(
  'courses/pickCourse',
  async ({ code, classCode }, { rejectWithValue }) => {
    try {
      return await $api.courses.pickCourse(code, classCode);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    filters: {
      query: '',
      type: 'all',
    },
    pickedCourses: [],
    pickedCoursesUnits: 0,
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
  extraReducers: {
    [fetchPickedCourses.fulfilled]: (state, action) => {
      state.pickedCourses = action.payload.courses;
      state.pickedCoursesUnits = action.payload.units;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCourses, updateFilters } = coursesSlice.actions;

export default coursesSlice.reducer;
