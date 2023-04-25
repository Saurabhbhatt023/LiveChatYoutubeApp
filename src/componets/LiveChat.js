import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'
import { generateComments } from '../utils/helper'


const LiveChat = () => {

     const [liveMessage , setLiveMessage] = useState()
      const dispatch = useDispatch()

        const chatMessage = useSelector( store => store.chat.messages)


       useEffect(() => {

     const i =       setInterval(() => {

        //Api Polling
                dispatch(addMessage( {
                    name : generateRandomName() ,
                    Message :  generateComments(),
                }))
            } , 3000)

            return () => clearInterval(i)
            //eslint-disable-next-line 
       } , [])



  return (


    <>  
    <div className=' w-full h-[400px] ml-2 p-2 border border-black bg-gray-300 rounded-lg overflow-y-hidden y-scroll  flex flex-col-reverse'>

         {/* <ChatMessage name= "Saurabh Bhatt" message=" Hello this is like" /> */}
       <div>  
         {chatMessage.map(( msg , i)=>  <ChatMessage key= {i} name= {msg.name} message ={msg.Message}/> )}
         </div>

         
    </div>
    <form className='w-full px-2 ml-2 border border-black'

      onSubmit={(e) => {
        
          e.preventDefault()
         console.log("On Form Submit" , liveMessage )
         dispatch(addMessage ( {

          name: "Saurabh" ,
          Message: liveMessage ,
         }))

      }} >
        <input  className='w-72' type='text'  value= {liveMessage} onChange = {(e) => {
          setLiveMessage(e.target.value)
        }}/> <button className='px-2 mx-2border border-black bg-green-400 rounded-lg'>Send</button>
             
          </form>
    </>
  )
}

export default LiveChat