import { configureStore } from '@reduxjs/toolkit';

import  VoyageReducers from '../features/voyage/voyageSlice' 
import VoyageurReducer from'../features/voyageurs/voyageurSlice'
import agentReducer from'../features/users/userSlice'
import reservationReducer from'../features/reservation/reservationSlice'
import EmailReducer from'../features/emailss/emailSlice'
export const store = configureStore({

  reducer: {

    voyages : VoyageReducers,
    voyageurs:VoyageurReducer,
    agents:agentReducer,
    reservations:reservationReducer,
    emails:EmailReducer,
  },
});