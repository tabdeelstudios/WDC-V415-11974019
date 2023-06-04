import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    users: userReducer,
  },
});
