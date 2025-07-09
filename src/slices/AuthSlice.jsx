import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: userFromStorage || null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
