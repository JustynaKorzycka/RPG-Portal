import { createSlice } from "@reduxjs/toolkit";

const initStateValue = [];

export const gameMastersSlice = createSlice({
  name: "gameMasters",
  initialState: { value: initStateValue },
  reducers: {
    fetchedGameMasters: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { fetchedGameMasters } = gameMastersSlice.actions

export default gameMastersSlice.reducer;
