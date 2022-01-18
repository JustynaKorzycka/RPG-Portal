import { configureStore } from '@reduxjs/toolkit'; 
import campaignsReducer from './campaigns';
import gameMasterReducer from './gameMasters';

 const store = configureStore({
  reducer: {
     campaigns: campaignsReducer,
    gameMasters: gameMasterReducer
  }
 })

export default store;