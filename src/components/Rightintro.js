import React from 'react'
import {IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter} from 'react-icons/io'
const Rightintro = () => {
    return (
        <div className = " right-0 pt-16 row-end-5 pt-16 col-start-5 col-end-6 row-start-2 row-end-auto ">
            <div className="Card shadow-xl  border-red-200 border flex flex-col items-center rounded-lg   ">
                <img src= 'https://i2-prod.irishmirror.ie/news/article23616187.ece/ALTERNATES/s810/0_Birdy-main.jpg' alt ="sfdsf" className="Image shadow-lg my-4  rounded-full bg-green-400   h-36 w-36  ">

                </img>
                <h1 className = " font-bold border-b  pb-2"> About me </h1>
        <p className="aboutme px-4 py-1  text-sm font-about2 font-bold ">
   

                 in branding materials for stylish, forward-thinking brands and
                  creative individuals in the fashion, home, and beauty world.
                   THE EDITOR
                </p>
            </div>

            <div className="share border-red-200 border shadow-xl mt-6 ">
                <div className="Image  bg-red-400 pr-2/5 flex justify-center  w-full  ">
                        <h1 className ="text-white font-bold" > Follow me on </h1>
                </div>
                <div className="aboutme px-4 py-1 flex justify-around text-2xl">
               <IoLogoInstagram  /> 

               <IoLogoFacebook />

               <IoLogoTwitter />

               <IoLogoPinterest/>
            
                </div>
            </div>
            
            
        </div>
    )

    }

    export default Rightintro
