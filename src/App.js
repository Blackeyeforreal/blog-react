import Header from './components/Header'
import Wall from './components/wall'
import Createposts from './components/Createposts'
import {useState ,useEffect } from 'react'
import Sidepanel from './components/Sidepanel'
import { BrowserRouter as Router, Route, useParams} from 'react-router-dom'
import Rightintro from './components/Rightintro'
import Delete from './components/Delete'

const BaseUrl = "http://127.0.0.1:8000/";
/* [
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
  ]  */

const App = () => {

  const [Post, setPost] = useState([])
const [Posts, setPosts] = useState(
[]
  
  )

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setPosts(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${BaseUrl}posts/`)
    const data = await res.json()

    return data
  }


  const posttheblog = async (post) => {
    const res = await fetch(`${BaseUrl}posts/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),

    }
    )
    console.log( JSON.stringify(post)) 
    const data = await res.json()

    setPosts([...Posts, data])

    res.status == 400 ? alert(" Error occured while posting the data, Try arranging the no of words in summary"):
    alert("Uploaded")
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  const fetchPost = async (id) => {
    console.log(  "this is the ide " + id.id)
    const res = await fetch(`${BaseUrl}posts/${id.id}/`)

    const data = await res.json()

    setPost(data)

    
  }  

  const Postload =  ({Post}) =>{ 
    let   id   = useParams();
  fetchPost(id)
   return (
     <div className=" pt-16 " > 
       <h1 className= " text-6xl pb-16"  >{ Post.heading }</h1>
        <p className = " pr-32 pt-16 "  > {Post.content}</p>
     </div>
   );

  }

  const deletepost = async (id) => {
    const res = await fetch(`${BaseUrl}posts/${id}/`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 204
      ? setPosts(Posts.filter((post) => post.id !== id))
      : alert('Error Deleting This Task')
  }


  return (
  <Router>     
    <div className ='h-full grid grid-cols-5 gap-4 px-4 ' >

      <Sidepanel />
     <Header title = "hello" />
     <Rightintro />


       <switch className= "  pl-32 col-start-1 col-end-4 row-start-2 mx-4">
          <Route
          exact
           path = '/wall'
           >  
           <Wall Posts ={Posts} />
             </Route>
          <Route path = '/Delete'>
            <Delete Posts= {Posts}  deletepost = {deletepost} />
          </Route>

            <Route path = '/posts/:id' children= {<Postload Post={Post}/>} />



           <Route 
           exact
           path= '/posts'
        
           >
             
             <Createposts posttheblog = {posttheblog} />
             
             </Route>
         



       </switch>
  

     
  


 


    </div>
  </Router>    
    
  );
}

export default App;
