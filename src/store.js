import { configureStore } from "@reduxjs/toolkit";
import matrsSlice from "./slices/matrsSlice";
import mainHeadingSlice from "./slices/mainHeadingSlice";
import defaultHeadingSlice from "./slices/defaultHeadingSlice";
import frameloopStateSlice from "./slices/frameloopStateSlice";
import distanceSlice from "./slices/distanceSlice";
import componentCardSlice from "./slices/componentCardSlice";

export const store = configureStore({
  reducer: {
    matrs: matrsSlice,
    heading: mainHeadingSlice,
    defaultHeading: defaultHeadingSlice,
    distance: distanceSlice,
    frameloopState: frameloopStateSlice,
    componentCard: componentCardSlice,
  },
});
