import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    update: (state, action) => ({ ...action.payload })
  }
});

export const { update } = slice.actions;
export default slice.reducer;
