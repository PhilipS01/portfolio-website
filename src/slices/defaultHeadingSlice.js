import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vis: false,
  text: "Ideen werden Realität",
  subtext: "Mechatronik und Full-Stack-Entwicklung",
};

export const defaultHeadingSlice = createSlice({
  name: "defaultHeading",
  initialState,
  reducers: {
    setDefaultHeadingVis: (state, action) => {
      state.vis = action.payload;
    },
  },
});

export const { setDefaultHeadingVis } = defaultHeadingSlice.actions;

export default defaultHeadingSlice.reducer;
