import { configureStore } from "@reduxjs/toolkit";
import matrsSlice from "./slices/matrsSlice";
import frameloopStateSlice from "./slices/frameloopStateSlice";

export const store = configureStore({
  reducer: {
    matrs: matrsSlice,
    frameloopState: frameloopStateSlice,
  },
});
