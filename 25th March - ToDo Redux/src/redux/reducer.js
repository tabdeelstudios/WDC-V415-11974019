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
    completedToDos: (state, action) => {
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addToDos, completedToDos } = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;

// npm install react-redux @reduxjs/toolkit
