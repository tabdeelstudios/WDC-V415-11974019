import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addSubscriberReducer = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    addSubscribers: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addSubscribers } = addSubscriberReducer.actions;
export const reducer = addSubscriberReducer.reducer;

// npm install react-redux @reduxjs/toolkit
