
import React from 'react'

const Wall = ({Posts}) => {
    return ( 
        <div className= '      '>
         <div className = 'grid grid-cols-auto auto-rows-cardauto gap-8 ' >
         {  Posts.map((post) => (
                <div  className = 'min-h-ful  card bg-green-400  '> 
                    <div className ='h-3/5 bg-pink-600 l' > image </div> 

                  <div className = ''>

                        <h6> {post.heading} </h6>
                        
                        <p>
                            {post.content}
                        </p>

                  </div>
                </div>

          )

            )}
         </div>
        </div>
    )
}

export default Wall
