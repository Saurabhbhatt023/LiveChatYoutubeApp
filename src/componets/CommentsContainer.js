import React from 'react'


 const commentsData =   [

   {
      name : "Saurabh Bhatt" ,
      text :  "Hey  these are nested Comments 😇" ,
      replies : [   {
        name : "Akash pandey" ,
        text :  " ok 🥸" ,
        replies : [   {
            name : "abhishek Pundir" ,
            text :  "  Great saurabh" ,
            replies : [   {
                name : "Aman gupta" ,
                text :  "Noted" ,
                replies : []
             },]
         },]
     },]
   },
   {
    name : " Nakul Singh" ,
    text :  " Cool Project 😅" ,
    replies : []
 },
 {
    name : "king" ,
    text :  " ok" ,
    replies : [{
        name : "Natasha" ,
        text :  "ok saurabh" ,
        replies : [{
            name : "Saurabh Bhatt" ,
            text :  "Hey  this is saurabh" ,
            replies : [{
                name : "Saurabh Bhatt" ,
                text :  "Hey  this is saurabh" ,
                replies : [{
                    name : "Saurabh Bhatt" ,
                    text :  "Hey  this is saurabh" ,
                    replies : [{
                        name : "Saurabh Bhatt" ,
                        text :  "Hey  this is saurabh" ,
                        replies : []
                     },]
                 },]
             },]
         },]
     },]
 },
 {
    name : "Saurabh Bhatt" ,
    text :  "Hey  this is saurabh" ,
    replies : []
 },
 {
    name : "Saurabh Bhatt" ,
    text :  "Hey  this is saurabh" ,
    replies : []
 },
 {
    name : "Saurabh Bhatt" ,
    text :  "Hey  this is saurabh" ,
    replies : []
 },
       
 ]


  const Comments = ({data}) => {

    const {name , text  } = data

    

     return (

         

          <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'> 
        

            <img  className='h-12 w-12' alt = "" src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      
         <div className='px-3'>  
           <p className='font-bold'>{name}</p>
           <p>{text}</p>
           </div>
         </div>   
     )    
  }

    const CommentsList = ({comments}) => {

          return comments.map((comment , i) =>  <div> <Comments key = {i} data ={comment}  />  
          
            <div className='pl-5 border-l-lime-200'> 
        
               <CommentsList comments={ comment.replies}/>  
            </div>
            </div>

          ) 
    }
    

 const CommentsContainer = () => {


  return (


    <div className='m-5 p-2'>

         <h1 className = "text-2xl font-bold">Comments: </h1>
         <CommentsList comments = {commentsData} />
   
     </div>

  )
}

export default CommentsContainer




// n level commmets