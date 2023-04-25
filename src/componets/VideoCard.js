// import { isRejectedWithValue } from '@reduxjs/toolkit'
// import { info } from 'autoprefixer'
import React from 'react'

const VideoCard = ({info}) => {


      // console.log(info)

       const {snippet , statistics} = info
       const {channelTitle , title , thumbnails} = snippet
     return <div className='p-2 m-2 w-60  shadow-lg   border-black '>

 
<img className='rounded-lg' alt = "videoimg" src= {thumbnails.medium.url}/>
       <ul>
         <li className='font-bold p-3 flex-auto'>{title}</li>
         <li  className=' font-extralight p-3 flex-auto '>{channelTitle}</li>
         <li className='font-mono p-3 flex-auto'>views-{statistics.viewCount}K </li>
         </ul>
         </div>
  
}


   export const  AdVideoCard = ({info}) => {

       return <div className='border p-1 border-red-800  ' >
         <VideoCard  info = {info}/>
         </div>
   }

export default VideoCard