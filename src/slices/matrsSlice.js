import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vis: false,
  text: "MATRS",
  subtext: "Motion Activated Turret Remote System",
  properties_vis: false,
  properties_toggle_update: false,
};

export const matrsSlice = createSlice({
  name: "matrs",
  initialState,
  reducers: {
    setMATRSVis: (state, action) => {
      state.vis = action.payload;
    },
  },
});

export const { setMATRSVis } = matrsSlice.actions;

export default matrsSlice.reducer;
