import React from 'react'

import {Link} from 'react-router-dom'
function openpanel() {
  document.getElementById("mySidenav").className = " sidenav h-full w-32 pt-17 delay-75 fixed bg-black top-0 left-0 z-1 overflow-hidden";
document.getElementById("root").className = "ml-32 duration-75"


}


function closepanel() {
    document.getElementById("mySidenav").className = " sidenav h-full w-0 pt-17 duration-1000 fixed bg-black top-0 left-0 z-1 overflow-hidden  ";
  document.getElementById("root").className = "ml-0 duration-1000"
  
  
  }
  
const Sidepanel = () => {
    return (  <div>



        <div id="mySidenav"  className="sidenav h-full w-0 pt-17  fixed bg-black top-0 left-0 z-1 overflow-hidden duration-1000 ">
            <button className="block bg-white absolute" onClick={closepanel}  >  close  </button>
            <ul className="bg-white">
            <li>
              <Link to='/wall'>Public Page</Link>
            </li>
            <li>
              <Link to='/posts'>Protected Page</Link>
            </li>
          </ul>
      </div>
      


      
                <button onClick = {openpanel} className='absolute px-8 bg-white'  > I_am_a_button</button>
        </div>
    )
}

export default Sidepanel
