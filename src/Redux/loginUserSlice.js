import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = {user:{}, isLogged : false};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, values }) => {
    return await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
      },
       body: JSON.stringify(values)
    })
      .then((res) => res.json())
  }
)

const loginUserSlice = createSlice({
  name: "user",
  initialState: initStateValue ,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    logoutSuccess: (state) => {
      state.user = {};
      state.isLogged = false;
    }
  },
  extraReducers: {
    [updateUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.user = {...action.payload};
    }
  }
  
});


export const selectLoginUser = state => state.user;
export const { loginSuccess, logoutSuccess } = loginUserSlice.actions;

export default loginUserSlice.reducer;
