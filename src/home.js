import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setMenuState } from "./counter/counterSlice";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Menu from "./menu";
import Characters from "./characters";

export default function Home(){
    const dispatch = useDispatch();
    function Header(){
      return(
        <>
        <div className='h-screen w-full relative'>              
          <div className='h-screen w-full absolute top-0'>
            <nav className='flex justify-end items-center h-28 w-full'>
              <motion.div onClick={()=>dispatch(setMenuState())} className='py-1 px-1 rounded-full mr-10 md:mr-20 lg:mr-32 bg-white'
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              >
                <img className='h-16 w-16 cursor-pointer' src='./image/icon/menu.svg' alt='menuIcon'></img>
              </motion.div>          
            </nav>
            <div className='h-full w-full mx-auto text-white mt-32'>
              <img className="mx-auto" width={'30%'} height={'30%'} src="./image/genshinlogo.svg" alt="Genshin Logo"></img>
              <p className="text-center text-4xl mt-10 font-bold" style={{fontFamily: 'Merienda'}}>CHARACTER MODELS SHOWCASE</p>
            </div>
          </div>
          <Menu/>
        </div>
        </>
      );
    }
    return(
      <>
      <div className='h-screen w-full absolute top-0'>     
        <ReactPlayer className='scale-custom react-player' width={'100%'} height={'100%'} url={`https://webstatic.hoyoverse.com/upload/contentweb/2020/09/25/c83e1d727f16a10a35adfbb840746a34_3862078340648314834.mp4`} playing={true} volume={0.2} muted={true} loop={true}></ReactPlayer>
      </div>
      <Header/>
      <Characters/>
      </>
    )
  }