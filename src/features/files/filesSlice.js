import { createSlice } from "@reduxjs/toolkit";
import { getFile, getFiles } from "./filesAPI";

const initialState = {
  loading: false,
  files: null,
  error: false,
};

const filesSlice = createSlice({
  name: "@files",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFiles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFiles.fulfilled, (state, action) => {
      state.loading = false;
      state.files = action.payload;
    });
    builder.addCase(getFiles.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getFile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFile.fulfilled, (state, action) => {
      state.loading = false;
      state.files = [...action.payload];
    });
    builder.addCase(getFile.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default filesSlice.reducer;
