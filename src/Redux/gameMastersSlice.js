import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = { gameMasters: [], status: null };

export const getGameMasters = createAsyncThunk(
  "gameMasters/getGameMasters",
  async () => {
    return await fetch('http://localhost:3000/users?userType=gameMaster')
      .then((res) => res.json())
  }
)

const gameMastersSlice = createSlice({
  name: "gameMasters",
  initialState: initStateValue,
  reducers: {
    changeGameMasterAvatar: (state, action) => {
      const index = state.gameMasters.findIndex(gameMasters => gameMasters.id === action.payload.id);
      state.gameMasters[index] = {
        ...state.gameMasters[index],
        avatar: action.payload.avatar
      }
    }
  },
  extraReducers: {
    [getGameMasters.pending]: (state) => {
      state.status = 'loading'
    },
    [getGameMasters.fulfilled]: (state, action) => {
      state.status = 'success';
      const gameMasterData = action.payload.map(item => {
        const newItem = {
          id: item.id,
          nick: item.nick,
          avatar: item.avatar,
          userSaved: item.userSaved
        }
        return newItem;
      })
      state.gameMasters = gameMasterData
    },
    [getGameMasters.rejected]: (state) => {
      state.status = 'failed'
    },
  }
});


export const selectGameMasters = state => state.gameMasters;
export const { changeGameMasterAvatar } = gameMastersSlice.actions;

export default gameMastersSlice.reducer;
