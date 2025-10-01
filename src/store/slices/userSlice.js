import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { users: [], currentUser: null },
  reducers: {},
});

export default userSlice.reducer;
