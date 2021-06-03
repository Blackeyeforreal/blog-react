import Header from './components/Header'
import Wall from './components/wall'
import Createposts from './components/Createposts'
import {useState } from 'react'
import Sidepanel from './components/Sidepanel'
import { BrowserRouter as Router, Route } from 'react-router-dom'

  




const App = () => {
  
const [Posts, setPosts] = useState(
[
    {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }, {
      "heading":" dooba dooba dobaa ",
      "content": "parrry the platipus",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    }
  ]
  )

  const posttheblog = (props) =>{
    const newpost = {
     heading : props.heading, 
      content : props.content,
    }
   setPosts( [...Posts , newpost]
   )

   console.log(Posts)

}




  return (
  <Router>    
    <div className ='h-full' >

      <Sidepanel />
     <Header title = "hello" />


       <switch>
          <Route
          exact
           path = '/wall'
          
           >   <Wall Posts ={Posts} />
             </Route>

           <Route 
           exact
           path= '/posts'
         
           ><Createposts posttheblog = {posttheblog} />
             
             </Route>
         



       </switch>
  

     
  


 


    </div>
  </Router>    
    
  );
}

export default App;
