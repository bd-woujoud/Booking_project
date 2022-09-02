import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deletevoyageurs, getvoyageurs } from './voyageursApi';


const initialState = {

allvoyageur:[],
deletevoyageur:''

}

export const GetVoyageur = createAsyncThunk(
    'voyageur/getvoyageur',
    async () => {

        const response = await getvoyageurs();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

export const DeleteVoyageur = createAsyncThunk(
    'voyageur/deletevoyageur',
    async (id) => {

        const response = await deletevoyageurs(id);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

export const voyageurSlice = createSlice({
    name: 'voyageurs',
    initialState,
    reducers: { 
        
  
    },

    extraReducers: (builder) => {    //depond du server.js
        builder
          
     //get

     .addCase(GetVoyageur.pending, (state) => {

    })

    .addCase(GetVoyageur.fulfilled, (state, action) => {

            console.log(action.payload,'aaaaaaaaaaaaa');  
            state.allvoyageur =action.payload.data
    })

    .addCase(GetVoyageur.rejected, (state, action) => {
             console.log('rejected');
    })

    
     //delete

     .addCase(DeleteVoyageur.pending, (state) => {

    })

    .addCase(DeleteVoyageur.fulfilled, (state, action) => {

            console.log(action.payload,'aaaaaaaaaaaaa');  
     if
           ( action.payload.data){

              state.deletevoyageur="success"

            }   
       else{

        state.deletevoyageur="failure"

       }     

    })

    .addCase(DeleteVoyageur.rejected, (state, action) => {
             console.log('rejected');
    })

    }

})








    export const {} = voyageurSlice.actions;
    export const SelectAllVoyageur = (state) => state.voyageurs.allvoyageur;
    export const SelectdeleteVoyageur = (state) => state.voyageurs.deletevoyageur;

export default voyageurSlice.reducer ;
