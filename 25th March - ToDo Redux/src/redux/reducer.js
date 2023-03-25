import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addToDos } = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;

// npm install react-redux @reduxjs/toolkit
