//mport Button from './Buttons'
import {Link} from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import Sidepanel from './Sidepanel'
//import openpanel from './Sidepanel'
function openpanel() {
    document.getElementById("mySidenav").className = " row-start-2  sidenav h-full w-44 pt-17 delay-75 fixed bg-black top-0 left-0 z-1 overflow-hidden";
  document.getElementById("root").className = " duration-75"
  
  
  }
const Header = (props) => {
    return (
           
           <header className= 'header border-b border-green-200 col-start-1 col-end-6 row-start-1 row-end-1    '>

<ul className="border  shadow-lg h-24 pt-4">
            <div className =" menu grid grid-cols-4" > 
            
            <li className = ' text-black font-bold'>
              <Link className =" float-right pt-4 text-2xl" to='/wall'>Articles</Link>
            </li>
            <li className = " col-start-2  col-end-4">
              
          
            <div className = ' w-full h-full flex justify-center '><h1 className= ' text-black text-5xl font-title '> Blog  </h1> </div>
           </li>
           <li className = ' text-black pt-4 text-2xl font-bold'>
            <div className="dropdown">  Manage
            <div class="dropdown-content">
      <Link className = ' text-black text-xl font-bold ' to="/posts">Create</Link>
      <Link className = ' text-black text-xl font-bold ' to="/delete">Delete</Link>
     
    </div>
             </div>  
            </li>
         
         
            
            </div>
            
 </ul>
        



            
        </header>
    )
}


export default Header
  //  <button onClick = {openpanel} className='absolute px-8 text-white'  > <FiAlignJustify/>  </button>