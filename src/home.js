import React, {useRef, useState} from "react";
import { useDispatch } from "react-redux/es/exports";
import { setMenuState } from "./counter/counterSlice";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import Menu from "./menu";
import Characters from "./characters";

export default function Home(){  
    const dispatch = useDispatch();
    function Header(){
      return(
        <>            
        <motion.div className="h-screen w-full bg-white absolute top-0 z-50"
          initial={{opacity:1}}
          animate={{opacity:0, transitionEnd:{display: 'none'}}}
          transition={{duration:1, ease:'easeInOut', delay:0.5}}
        ></motion.div>
        <div className='h-screen w-full relative'>              
          <div className='h-screen w-full absolute top-0'>
            <nav className='flex justify-end items-center h-28 w-full'>
              <motion.div onClick={()=>dispatch(setMenuState())} className='h-24 w-24 rounded-full mr-10 md:mr-20 lg:mr-32 bg-white cursor-pointer'
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              >
                <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url('../image/icon/paimon.webp')`, backgroundSize: '70%'}}></div>
              </motion.div>          
            </nav>           
          </div>
          <Menu/>
        </div>
        </>
      );
    }
    return(
      <>     
      <div className='h-screen w-full absolute top-0'>     
          <ReactPlayer className='scale-custom-2 react-player' width={'100%'} height={'100%'} url={`https://www.youtube.com/embed/IRj6tNev7t0`} playing={true} volume={0.2} muted={true} loop={true}></ReactPlayer>
      </div>
      <Header/>
      <Characters/>
      </>
    )
  }