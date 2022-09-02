import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteagent, getagent, updateUser, uploadAvatar } from './userApi';



const initialState = {

allagent:[],
deleteAgent:'',
avatarstatus:'',
user: null,


}

export const GetAgent = createAsyncThunk(
    'agent/getagent',
    async () => {

        const response = await getagent();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

export const DeleteAgent = createAsyncThunk(
    'agent/deleteagent',
    async (id) => {

        const response = await deleteagent(id);
      
        return response.data;
    }

);

//update user
export const UpdateUser=createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await updateUser(data);
      
        return response;
    } 
)


// uploadd user avatar 
export const uploadavatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);
    
        return response;
    }
);


export const agentSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: { 

    },

    extraReducers: (builder) => {    //depond du server.js
        builder
          
     //get

     .addCase(GetAgent.pending, (state) => {

    })

    .addCase(GetAgent.fulfilled, (state, action) => {

            console.log(action.payload,'aaaaaaaaaaaaa');  
            state.allagent =action.payload.data
    })

    .addCase(GetAgent.rejected, (state, action) => {
             console.log('rejected');
    })


        
     //delete

     .addCase(DeleteAgent.pending, (state) => {

    })

    .addCase(DeleteAgent.fulfilled, (state, action) => {

            console.log(action.payload,'aaaaaaaaaaaaa');  
     if
           ( action.payload.data){

              state.deleteAgent="success"

            }  

       else{

        state.deleteAgent="failure"

       }     

    })

      /// upload avaytar
      .addCase(uploadavatar.pending, (state, action) => {
        state.avatarstatus = 'loading'
    })
    .addCase(uploadavatar.fulfilled, (state, action) => {
        console.log(action.payload);

        if (action.payload.data) {
            state.avatarstatus = 'success'
            state.user = action.payload.data.data
        } else {
            state.avatarstatus = 'failure'

        }

    })
    .addCase(uploadavatar.rejected, (state, action) => {

    })



}

}
)

    export const {} = agentSlice.actions;
    export const SelectAllagent = (state) => state.agents.allagent;
    export const SelectDeleteagent = (state) => state.agents.deleteAgent;
    export const selectavatarstatus = (state) => state.agents.avatarstatus;


export default agentSlice.reducer ;

