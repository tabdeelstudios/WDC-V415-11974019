import userReducer from "../reducers/userReducer";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
