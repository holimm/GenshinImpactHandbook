import React , {useState} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setMuteState, setMenuState } from "./counter/counterSlice";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Menu from "./menu";

export default function Home(){
    const dispatch = useDispatch();
    const [bgState] = useState('nU0MnCpsUD4');
    const muteState = useSelector((state)=>state.counter.muteState);
    function Home(){
      return(
        <>
        <div className='h-screen w-full relative'>              
          <div className='h-screen w-full absolute top-0'>
            <nav className='flex justify-end items-center h-28 w-full'>
              <div className='w-fit h-fit mr-16'>
                <motion.img onClick={()=>dispatch(setMuteState())} className='h-14 w-14 cursor-pointer' src='./image/icon/headphone.svg' alt='menuIcon'
                  whileHover={{scale:1.2}}
                  whileTap={{scale:0.8}}
                ></motion.img>
              </div>
              <div className='w-fit h-fit mr-32'>
                <motion.img onClick={()=>dispatch(setMenuState(false))} className='h-16 w-16 cursor-pointer' src='./image/icon/menu.svg' alt='menuIcon'
                  whileHover={{scale:1.2}}
                  whileTap={{scale:0.8}}
                ></motion.img>
              </div>          
            </nav>
            {/* <div className='h-fit w-fit mx-auto text-5xl text-white mt-52'>My miHoYo World</div> */}
          </div>
          <Menu/>
        </div>
        </>
      );
    }
    return(
      <>
      <div className='h-screen w-full absolute top-0'>     
        <ReactPlayer className='scale-custom2 react-player' width={'100%'} height={'100%'} url={`//www.youtube.com/embed/${bgState}?autoplay=1&start=3&end=32&mute=0&rel=0`} playing={true} volume={0.2} muted={muteState} loop={true}></ReactPlayer>
        <div className='h-screen w-full bg-black/50 absolute top-0'></div>
      </div>
      <Home/>
      </>
    )
  }