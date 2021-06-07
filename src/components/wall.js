
import React from 'react'
 // <div className ='h-3/5 w-full bg-pink-600  absolute ' > image </div> 
 import {Link} from 'react-router-dom'

const Wall = ({Posts}) => {
  const opend=( i )=>{
    


  }
    return ( 
        <div  >  
         <div className = 'grid grid-cols-2 auto-rows-cardauto pt-16  gap-8 ' > 
        
<h1 className = ' border-b-4  text-6xl'> My Collection </h1>
              
         {  Posts.map((post) => (
               <Link className="col-start-1 col-end-3 auto-rowsa-cardauto b border  border-green-200" to = {'/posts/'+ post.id }  >
                
                <div  className =  '  h-full rounded-lg shadow-lg    '> 

                <img  className =  ' bg-cover bg-jon h-full  shadow-lg  float-right  ' src= 'https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg' alt= 'jpn'>

                </img>

                  <div className =  ' bg-red-400 w-3/6 h-3/6 rounded-mg  shadow-lg flex justify-center '>
        
                        <h6 className= 'font-bold text-4xl  text-white pt-4'> {post.heading} </h6>
                       

                  </div> 
                        <p className = "font-normal mt-4 mb-4">
                            {post.summary}
                        </p>
                </div> 
                </Link> 

          )

            )}
         </div>
        </div>
    )
}

export default Wall


//<div  className =  ' max-h-card max-w-card bg-contain border-green-400 border-2 bg-jon min-h-card 5  min-w-card max-w-card relative rounded-lg  card bg-green-400  '> 