import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const postUserLogin = createAsyncThunk(
  "postLogin/postUserLogin",
  async (signData) => {
    try {
      const res = await api.post(`/auth/login`, signData);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const postUserLoginSlice = createSlice({
  name: "postLogin",
  initialState: {
    info: {},
    isLoading: false,
    isAuth: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUserLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUserLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.info = payload;
      state.isAuth = true;
    });
    builder.addCase(postUserLogin.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postUserLoginSlice.reducer;
