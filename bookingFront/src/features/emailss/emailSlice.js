import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getemail } from './emailApi';

const initialState = {

   emails:[],


};

//getAllEmail

export const GetEmail = createAsyncThunk(

    'Emails/GetEmail',
  
    async () => {
      const response = await getemail();
      return response.data;
    }

  );


export const EmailSlice = createSlice({

    name: 'emails',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {

        builder

   //getall

   .addCase(GetEmail.pending, (state) => {

  })

  .addCase(GetEmail.fulfilled, (state, action) => {

      console.log(action.payload,"dataaaaaaaa");

    state.emails = action.payload.data

  })

  .addCase(GetEmail.rejected, (state, action) => {

  })


}

})

export const { } = EmailSlice.actions;

export const selectGetEmail = (state) => state.emails.emails


export default EmailSlice.reducer;