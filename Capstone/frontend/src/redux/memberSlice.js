import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    storeMembers: (state, action) => {
      state.members = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeMembers } = memberSlice.actions;

export default memberSlice.reducer;
