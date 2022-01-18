import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = { campaings: [], status: null };

export const getCampaigns = createAsyncThunk(
  "campaigns/getCampaigns",
  async (dispatch, getState) => {
    return await fetch('http://localhost:3000/campaigns')
    .then((res)=>res.json())
  }
)

 const campaignsSlice = createSlice({
  name: "campaings",
  initialState: initStateValue ,
  extraReducers: {
    [getCampaigns.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCampaigns.fulfilled]: (state, action) => {
      state.status = 'success';
      state.campaings = action.payload
    },
    [getCampaigns.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});


export const selectCampaigns = state=>state.campaigns;

export default campaignsSlice.reducer;
