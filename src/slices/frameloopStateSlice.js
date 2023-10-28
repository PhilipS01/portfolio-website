import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frameloop: "demand",
};

export const frameloopStateSlice = createSlice({
  name: "frameloopState",
  initialState,
  reducers: {
    setFrameloop: (state, action) => {
      state.frameloop = action.payload;
    },
  },
});

export const { setFrameloop } = frameloopStateSlice.actions;

export default frameloopStateSlice.reducer;
