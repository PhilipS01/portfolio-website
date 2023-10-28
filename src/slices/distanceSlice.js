import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggled: false,
};

export const distanceSlice = createSlice({
  name: "distance",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggle } = distanceSlice.actions;

export default distanceSlice.reducer;
