import React, {useRef, useState} from "react";
import { useDispatch } from "react-redux/es/exports";
import { setMenuState } from "./counter/counterSlice";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import Menu from "./menu";
import Characters from "./tab/models";
import ModelsTab from "./tab/models";
import ModelsDetailTab from "./tab/model_details";
import StoryCutscenes from "./tab/story_cutscenes";

export default function Home(){  
    const dispatch = useDispatch();
    const [mute,setMute] = useState(false);
    const [opacity,setOpacity] = useState({initial: 1, animate: 0})
    const [showBlacken,setShowBlacken] = useState(true)
    function ChangeMute(){
      setMute(!mute)
      setOpacity({initial: 0, animate: 0})
      setShowBlacken(false)
    }
    function Header(){
      return(
        <>            
        {showBlacken && <motion.div className="h-screen w-full bg-white absolute top-0 z-50"
          initial={{opacity:opacity.initial}}
          animate={{opacity:opacity.animate, transitionEnd:{display: 'none'}}}
          transition={{duration:1, ease:'easeInOut', delay:0.5}}
        ></motion.div>}
        <div className='h-screen w-full relative'>              
          <div className='h-fit w-fit absolute top-0 right-0'>
            <nav className=' h-28 w-full flex justify-end items-center'>
              <div className="h-fit w-fit mr-10 md:mr-16 lg:mr-24 mt-10 md:mt-32 lg:mt-40">
                <motion.div onClick={()=>dispatch(setMenuState())} className='h-24 w-24 rounded-full mx-auto bg-white cursor-pointer'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                  <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url('../image/icon/paimon.webp')`, backgroundSize: '70%'}}></div>
                </motion.div>   
                <motion.div onClick={()=>ChangeMute()} className='h-20 w-20 mt-5 rounded-full mx-auto bg-white cursor-pointer'
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                >
                  <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `${mute ? `url('../image/icon/muted.svg')` : `url('../image/icon/speaker.svg')`}`, backgroundSize: '70%'}}></div>
                </motion.div>   
              </div>    
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
          <ReactPlayer className='scale-custom-2 react-player' width={'100%'} height={'100%'} url={`https://www.youtube.com/embed/B8197NUQ0LE?start=4&end=46&autoplay=1`} playing={true} volume={0.2} muted={mute} loop={true}></ReactPlayer>
      </div>
      <Header/>
      <ModelsTab/>
      <ModelsDetailTab/>
      </>
    )
  }