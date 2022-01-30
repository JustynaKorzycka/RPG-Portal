import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initStateValue = { campaigns: [], status: null };

export const getCampaigns = createAsyncThunk(
  "campaigns/getCampaigns",
  async () => {
    return await fetch('http://localhost:3000/campaigns')
    .then((res)=>res.json())
  }
)

export const updateCampaigns = createAsyncThunk(
  "campaigns/updateCampaigns",
  async ({id, values}) => {
    return await fetch(`http://localhost:3000/campaigns/${id}`, {
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

 const campaignsSlice = createSlice({
  name: "campaigns",
   initialState: initStateValue,
  extraReducers: {
    [getCampaigns.pending]: (state) => {
      state.status = 'loading'
    },
    [getCampaigns.fulfilled]: (state, action) => {
      state.status = 'success';
      state.campaigns = action.payload
    },
    [getCampaigns.rejected]: (state) => {
      state.status = 'failed'
    },
    [updateCampaigns.pending]: (state) => {
      state.status = 'loading'
    },
    [updateCampaigns.fulfilled]: (state, action) => {
      state.status = 'success';
      const index = state.campaigns.findIndex(campaign => campaign.id === action.payload.id);
      state.campaigns[index] = {
        ...state.campaigns[index],
        ...action.payload
      }
    },
    [updateCampaigns.rejected]: (state) => {
      state.status = 'failed'
    },
    
  }
});



export default campaignsSlice.reducer;
