import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createvoyage, deletevoyage, getvoyage, search, updatevoyage } from './voyageApi';


const initialState = {

AllVoyage :[],
 addvoyage:'',
 delete:'',
 update:''
 
};


export const Createvoyage = createAsyncThunk(
    'voyages/createvoyages',
    async (data) => { 

        const response = await createvoyage(data);
        return response;
     
    }

);
export const Getvoyage = createAsyncThunk(
    'voyages/getvoyages',
    async () => {

        const response = await getvoyage();
        return response.data;
    }

);
export const Deletevoyage = createAsyncThunk(
    'voyages/deletevoyages',
    async (id) => {

        const response = await deletevoyage(id);
        return response;
    }

);
export const Updatevoyage = createAsyncThunk(
    'voyages/updatevoyages',
    async (data) => {

        const response = await updatevoyage(data);
        return response;
    }

);

//search
export const Searchvoyage = createAsyncThunk(
    'voyages/searchvoyages',
    async (data) => {

        const response = await search(data);
        return response.data;
      
    }

);


export const voyageSlice = createSlice({
    name: 'voyages',
    initialState,
    reducers: { 
        
    },

    extraReducers: (builder) => { 
        builder

    //create
            .addCase(Createvoyage.pending, (state) => {
                state.addvoyage = 'loading'
            })

            .addCase(Createvoyage.fulfilled, (state, action) => {
           
              console.log(action.payload.data,'oooooo');

                if(action.payload.status === 200)  {

                    state.AllVoyage.push(action.payload.data)
                   
                  } 

                  else {

                    state.addvoyage = 'failure'
                    
                  }

            })

            .addCase(Createvoyage.rejected, (state, action) => {

            })

    //get


    .addCase(Getvoyage.pending, (state) => {

    })

    .addCase(Getvoyage.fulfilled, (state, action) => {

            console.log(action.payload);
            state.AllVoyage=action.payload.data   
    })

    .addCase(Getvoyage.rejected, (state, action) => {

    })



    //search

    .addCase(Searchvoyage.pending, (state) => {

    })

    .addCase(Searchvoyage.fulfilled, (state, action) => {

            console.log(action.payload.data,'dataaaaaaaaaaaa');
            state.AllVoyage=action.payload.data
    })

    .addCase(Searchvoyage.rejected, (state, action) => {

    })


    //delete

    .addCase(Deletevoyage.pending, (state) => {

    })

    .addCase(Deletevoyage.fulfilled, (state, action) => {

        console.log(action.payload);

        if (action.payload.data) {
          state.delete = 'success'
        } else {

          state.delete = 'failure'
        }   
    })

    .addCase(Deletevoyage.rejected, (state, action) => {

    })

    //update

    .addCase(Updatevoyage.pending, (state) => {

    })

    .addCase(Updatevoyage.fulfilled, (state, action) => {

        console.log(action.payload);

        if (action.payload.data=200) {
          state.update = 'success'

        } else {

          state.update = 'failure'

        }   
    })

    .addCase(Updatevoyage.rejected, (state, action) => {

    })

    }
})

export const {} = voyageSlice.actions;

export const selectCreateVoyages = (state) => state.voyages.addvoyage;
export const selectGetVoyages = (state) => state.voyages.AllVoyage;
export const selectDeleteVoyages = (state) => state.voyages.delete;
export const selectUpdateVoyages = (state) => state.voyages.update;


export default voyageSlice.reducer;