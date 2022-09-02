import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createreservation,deleteReservation,getreservation, getReservationbyUser} from './reservationApi';



const initialState = {

   addReservation:'',
   reservations:[],
   userreservation:[],
   delete:''
};


//CreateReservation

export const CreateReservation = createAsyncThunk(
    'reservations/createReservation',
  
    async (data) => {
      const response = await createreservation(data);
      return response;
    }
  );


//getAllReservation

export const GetReservation = createAsyncThunk(

    'reservations/GetReservation',
  
    async () => {
      const response = await getreservation();
      return response.data;
    }

  );

//getReservationbyuser

export const GetReservationByUser = createAsyncThunk(

    'reservations/Getbyuser',
  
    async (id) => {
      const response = await getReservationbyUser(id);
      return response.data;
    }

  );
//deleteReservationbyuser

export const DeleteReservation = createAsyncThunk(

    'reservations/delete',
  
    async (id) => {
      const response = await deleteReservation(id);
      return response.data;
    }

  );


export const reservationSlice = createSlice({

    name: 'reservations',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder

   //getall

   .addCase(GetReservation.pending, (state) => {

  })

  .addCase(GetReservation.fulfilled, (state, action) => {

      console.log(action.payload.data,"dataaaaaaaa");

    state.reservations = action.payload.data

  })

  .addCase(GetReservation.rejected, (state, action) => {

  })
   //getallbyuser

   .addCase(GetReservationByUser.pending, (state) => {

  })

  .addCase(GetReservationByUser.fulfilled, (state, action) => {

    console.log(action.payload,"kkkkkkkkkkk");
    state.userreservation = action.payload.data

  })

  .addCase(GetReservationByUser.rejected, (state, action) => {

  })

  //delete
  .addCase(DeleteReservation.pending, (state) => {

  })

  .addCase(DeleteReservation.fulfilled, (state, action) => {

    if (action.payload.data) {
      state.delete = 'success'
    } else {

      state.delete = 'failure'
    }
  })

  .addCase(DeleteReservation.rejected, (state, action) => {

  })

}

})

export const { } = reservationSlice.actions;

export const selectCreateReservation = (state) => state.Reservations.addReservation
export const selectGetReservation = (state) => state.reservations.reservations
export const selectGetbyUser = (state) => state.reservations.userreservation
export const selectdelete = (state) => state.reservations.delete


export default reservationSlice.reducer;