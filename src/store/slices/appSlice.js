import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  authenticated: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
      notify("theme updated");
    },
    login: (state) => {
      state.authenticated = true;
      notify("logged in");
    },
    logout: (state) => {
      state.authenticated = false;
      notify("logged out");
    },
  },
});

const notify = (msg) => console.log("App Action: " + msg);

export const { actions } = appSlice;
export default appSlice.reducer;
