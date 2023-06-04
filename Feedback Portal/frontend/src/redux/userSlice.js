import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state) => {
      return state;
    },
    storeUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, storeUser } = userSlice.actions;

export default userSlice.reducer;
