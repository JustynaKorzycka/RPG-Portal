import { createSlice } from "@reduxjs/toolkit";

const initStateValue = [];

export const campaingsSlice = createSlice({
  name: "campaings",
  initialState: { value: initStateValue },
  reducers: {
    fetchedCampaings: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { fetchedCampaings } = campaingsSlice.actions

export default campaingsSlice.reducer;
