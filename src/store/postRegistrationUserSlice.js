import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const postRegistrationUser = createAsyncThunk(
  "postRegistration/postRegistrationUser",
  async (signData) => {
    try {
      const res = await api.post(`/users`, signData);

      const data = res.data;

      return data;
    } catch (error) {}
  }
);

const postRegistrationUserSlice = createSlice({
  name: "postRegistration",
  initialState: {
    info: {},
    isLoading: false,
    isAuth: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRegistrationUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postRegistrationUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.info = payload;
      state.isAuth = true;
    });
    builder.addCase(postRegistrationUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postRegistrationUserSlice.reducer;
