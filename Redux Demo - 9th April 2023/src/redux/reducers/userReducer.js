import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let tempData;
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => (tempData = data));
  return tempData;
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Something went wrong!";
      }
    });
  },
});

export default userSlice.reducer;
