import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "Ideen werden Realität",
  subtext: "Mechatronik und Full-Stack-Entwicklung",
};

export const mainHeadingSlice = createSlice({
  name: "heading",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    changeSubtext: (state, action) => {
      state.subtext = action.payload;
    },
  },
});

export const { changeText, changeSubtext } = mainHeadingSlice.actions;

export default mainHeadingSlice.reducer;
