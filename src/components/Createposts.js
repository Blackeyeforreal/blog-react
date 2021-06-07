import React from 'react'
import {useState} from 'react'


const Createposts = ({posttheblog}) => {

const [heading, setheading] = useState('')
const [content, setcontent] = useState('')
const [summary, setsum] = useState('')

const onSubmit = (e) => {
   e.preventDefault()

    if (!heading && !content){
        alert('enter some freaking text dude')
        return
    }

    posttheblog({heading, content,summary})

    

}




    return (
       
           <form className= "h-full flex flex-col items-center mb-0 " onSubmit = {onSubmit}>
               <h1 className = ' border-b-4  text-6xl py-16'> What is on Your Mind?</h1>
               <div className =' pt-16'>
                      <label for="fname" className = " text-2xl">Title</label>
                </div>
                <div className = " mb-8">
                    <input 
                            type="text"
                            id="fname"
                            name="fname"
                            value = {heading} 
                            onChange ={(e) => setheading(e.target.value)}   
                             
                        />
                </div>
                <div className = " mb-8">
                    <label className = "  text-2xl" for="lname">Summary</label>
                </div>
                <div className = " mb-8">
                    <textarea 
                            type="text"
                            id="fname"
                            className =' w-full'
                            name="Under 200 words"
                            value = {summary} 
                            onChange ={(e) => setsum(e.target.value)}   
                             
                        />
                </div>
                
                <div className = " mb-8">
                    <label className = "  text-2xl" for="lname">Content</label>
                </div>
                <textarea className=" w-3/4  min-h-full max-h-max  " type="text" id="lname" name="lname" value = { content}  onChange= {(e) => setcontent(e.target.value)} />
                
      <input type="submit" value='Post' className='post pt-8 hover:bg-red-700 ' />
            </form>
        
    )
}

export default Createposts
