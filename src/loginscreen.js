import React, {useRef, useState} from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";

export default function LoginScreen(){  
    const navigate = useNavigate();
    function AppearGate(){
      const refWait = useRef(null);
      const refGate = useRef(null);
      const refContinue = useRef(null);  
      const [gateAppear,setGateAppear] = useState(false);
      const [gateOpen,setGateOpen] = useState(false);
      const [continueScreen,setContinueScreen] = useState(false);
      setTimeout(()=>{setGateAppear(true)},6000);
      setTimeout(()=>{setContinueScreen(true)}, 10200);
      const openGate = () => {
        setGateOpen(true);
        setTimeout(()=>{refWait.current.style.display = 'none'}, 500);
        setTimeout(()=>{refContinue.current.style.display = 'none'}, 600);
        setTimeout(()=>{navigate('/GenshinImpactHandbook/Home')}, 2000);
      }
      return(
        <>
          <div className='h-screen w-full absolute top-0' ref={refGate}>           
            <ReactPlayer className='scale-custom react-player' width={'100%'} height={'100%'} url={`./video/openDoor.mp4`} playing={gateOpen} volume={0.2} muted={true} ></ReactPlayer>
          </div>
          <div className='h-screen w-full absolute top-0' ref={refWait}>     
              <ReactPlayer className='scale-custom react-player' width={'100%'} height={'100%'} url={`./video/appearDoor.mp4`} playing={gateAppear} volume={0.2} muted={true}></ReactPlayer>
          </div>
          <div ref={refContinue} className="h-screen w-full bg-transparent absolute top-0 z-50"></div>
          {continueScreen ?
          <motion.div ref={refContinue} className="h-screen w-full absolute top-0 z-50 cursor-pointer" onClick={openGate}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:3}}
          >
            <div className="h-5/6 w-full"></div>
            <div className="h-14 w-full flex justify-center py-2 mt-8 cursor-pointer">
              <div className="h-full w-1/4 bg-gradient-to-l from-black to-transparent opacity-70"></div>
              <div className="h-full w-2/4 bg-black bg-opacity-70 flex items-center justify-center">
                <p className="text-2xl text-center text-white" style={{fontFamily: 'genshinFont'}}>CLICK TO BEGIN</p>
              </div>
              <div className="h-full w-1/4 bg-gradient-to-r from-black to-transparent opacity-70"></div>
            </div>    
          </motion.div> : null
        }
        </>
      )
    }
    function AppearLogo(){
      return(
        <>            
        <motion.div className="h-screen w-full absolute top-0 bg-white"
          initial={{opacity:1}}
          animate={{opacity:0, transitionEnd:{display: 'none'}}}
          transition={{duration:1, delay:6}}
        >
          <div className='h-full w-full flex justify-center items-center text-white'>
            <motion.img width={'30%'} height={'30%'} src="./image/genshinlogo.svg" alt="Genshin Logo"
              animate={{opacity: [0,1,0], transitionEnd:{display: 'none'}}}
              transition={{duration:4, times:[0,0.5,1], delay: 1}}
            ></motion.img>
          </div>
        </motion.div>
        </>
      );
    }
    return(
      <>     
      <AppearGate/>
      <AppearLogo/>
      </>
    )
  }