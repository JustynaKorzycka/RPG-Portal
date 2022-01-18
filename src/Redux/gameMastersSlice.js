import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = { gameMasters: [], status: null };

export const getGameMasters = createAsyncThunk(
  "gameMasters/getGameMasters",
  async (dispatch, getState) => {
    return await fetch('http://localhost:3000/users')
    .then((res)=>res.json())
  }
)

const gameMastersSlice = createSlice({
  name: "gameMasters",
  initialState: initStateValue ,
  extraReducers: {
    [getGameMasters.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getGameMasters.fulfilled]: (state, action) => {
      state.status = 'success';
      state.gameMasters = action.payload
    },
    [getGameMasters.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});


export const selectGameMasters = state=>state.gameMasters;

export default gameMastersSlice.reducer;