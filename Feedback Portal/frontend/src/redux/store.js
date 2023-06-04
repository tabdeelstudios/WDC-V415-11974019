import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
