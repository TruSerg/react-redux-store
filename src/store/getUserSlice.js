import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../http";

export const getUser = createAsyncThunk("getUser/getUser", async () => {
  try {
    const res = await api.get(`/users/11`);

    const data = res.data;

    return data;
  } catch (error) {}
});

const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    userInfo: {},
    isLoading: false,
    isAuth: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload;
      state.isAuth = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default getUserSlice.reducer;
