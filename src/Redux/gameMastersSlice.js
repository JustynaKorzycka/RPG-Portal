import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = { gameMasters: [], status: null };

export const getGameMasters = createAsyncThunk(
  "gameMasters/getGameMasters",
  async () => {
    return await fetch('http://localhost:3000/users')
    .then((res)=>res.json())
  }
)

export const updateGameMasters = createAsyncThunk(
  "gameMasters/updateGameMasters",
  async ({id, values}) => {
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

const gameMastersSlice = createSlice({
  name: "gameMasters",
  initialState: initStateValue ,
  extraReducers: {
    [getGameMasters.pending]: (state) => {
      state.status = 'loading'
    },
    [getGameMasters.fulfilled]: (state, action) => {
      state.status = 'success';
      state.gameMasters = action.payload
    },
    [getGameMasters.rejected]: (state) => {
      state.status = 'failed'
    },
    [updateGameMasters.pending]: (state) => {
      state.status = 'loading'
    },
    [updateGameMasters.fulfilled]: (state, action) => {
      state.status = 'success';
      const index = state.gameMasters.findIndex(gameMasters => gameMasters.id === action.payload.id);
      state.gameMasters[index] = {
        ...state.gameMasters[index],
        ...action.payload
      }
    },
    [updateGameMasters.rejected]: (state) => {
      state.status = 'failed'
    },
  }
});


export const selectGameMasters = state=>state.gameMasters;

export default gameMastersSlice.reducer;
