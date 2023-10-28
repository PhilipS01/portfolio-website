import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 1,
};

export const componentCardSlice = createSlice({
  name: "componentCard",
  initialState,
  reducers: {
    increaseIndex: (state) => {
      state.index += 1;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    resetIndex: (state) => {
      state.index = 0;
    },
  },
});

export const { increaseIndex, resetIndex, setIndex } =
  componentCardSlice.actions;

export default componentCardSlice.reducer;
