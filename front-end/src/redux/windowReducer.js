import { createSlice } from "@reduxjs/toolkit";
import { fetchWindows, addItem, editItem } from "./windowActions";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    windows: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWindows.fulfilled, (state, action) => {
        state.windows = action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.windows = state.windows.map((window) => {
          if (window._id === action.payload._id) {
            return action.payload;
          }
          return window;
        });
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.windows = state.windows.map((window) => {
          if (window._id === action.payload._id) {
            return action.payload;
          }
          return window;
        });
      });
  },
});

export default windowSlice.reducer;
