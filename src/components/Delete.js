import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


const Delete = ({Posts, deletepost}) => {
    return (
        
        
        

         <div className="row pb-8">
           <h1 className = ' border-b-4  text-6xl py-16 '> All Articls  </h1>
              <div className="column flex justify-center">
                <table className =  ' w-full '>  
                 < tr className = "top    ">
                    <th className = "w-1/4 ">No</th>
                    <th className = "w-1/4">Article</th>
                    <th className = "w-1/4" >Delete</th>
                  </tr>   
         {  Posts.map((post, index) => (
           
                  <tr>
                    <td className = "px-2">{index}</td>
                    <td className = "px-2 ">{post.heading}</td>
                    <td className = " float-right "> <button onClick = {()=>deletepost(post.id) } className =" text-xl">  <MdDeleteForever /> </button>  </td>
                   </tr>

                 
             

          )  )} </table>
              </div>
             
            </div>

           
        
       
    )
}

export default Delete
