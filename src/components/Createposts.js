import React from 'react'
import {useState} from 'react'


const Createposts = ({posttheblog}) => {

const [heading, setheading] = useState('')
const [content, setcontent] = useState('')

const onSubmit = (e) => {
   e.preventDefault()

    if (!heading && !content){
        alert('enter some freaking text dude')
        return
    }

    posttheblog({heading, content})

    

}




    return (
       
           <form onSubmit = {onSubmit}>
               <div>
                      <label for="fname">First name:</label>
                </div>
                <div>
                    <input 
                            type="text"
                            id="fname"
                            name="fname"
                            value = {heading} 
                            onChange ={(e) => setheading(e.target.value)}   
                        />
                </div>
                
                <div>
                    <label for="lname">Last name:</label>
                </div>
                <input type="text" id="lname" name="lname" value = { content}  onChange= {(e) => setcontent(e.target.value)} />
                
      <input type='submit' value='Save Task' className='btn btn-block' />
            </form>
        
    )
}

export default Createposts
