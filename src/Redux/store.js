import { configureStore } from '@reduxjs/toolkit'; 
import campaignsReducer from './campaignsSlice';
import gameMasterReducer from './gameMastersSlice';

 const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
    gameMasters: gameMasterReducer
  }
 })

export default store;