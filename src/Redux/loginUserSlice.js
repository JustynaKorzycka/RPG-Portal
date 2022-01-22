import { createSlice } from "@reduxjs/toolkit";

const initStateValue = {};


const loginUserSlice = createSlice({
  name: "user",
  initialState: initStateValue ,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      console.log(state)
    },
    logoutSuccess: (state) => {
      state.user = {};
    }
  }
  
});


export const selectLoginUser = state => state.user;
export const { loginSuccess, logoutSuccess } = loginUserSlice.actions;

export default loginUserSlice.reducer;
