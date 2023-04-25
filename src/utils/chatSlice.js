import { createSlice } from "@reduxjs/toolkit";
import { LiveChatNum } from "./constents";


  const chatSlice = createSlice( {

       name : "chat" ,
       initialState: {

          messages :[]
       } ,

       reducers :{

            addMessage : (state , action) => {
 
               state.messages.splice( LiveChatNum , 1)
                state.messages.push(action.payload)

            }
       }
  })

   export const {addMessage} =  chatSlice.actions
  export default chatSlice.reducer

   // chatslice k reducers bejhraha hai 
   // or chatslice k actions bejhraha hai
