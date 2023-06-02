import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { setModelsVisible, setModelsDetail, setMenuState, setStoryCutscenesVisible, setStoryCutscenesPlayingURL } from "../counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

export default function StoryCutscenes(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [mute,setMute] = useState(false);
    const [tabVideoListAnimate,setTabVideoListAnimate] = useState({initial: -480, animate: -480})
    const cutscenes = useSelector((state)=>state.counter.story_cutscenes);
    const playerURL = useSelector((state)=>state.counter.story_cutscenes_playing_url);
    const refCharacterSelector = useRef(null);
    function RedirectBack(){
        refCharacterSelector.current.classList.add('remove-menu');
        setTimeout(()=>{dispatch(setMenuState(true));navigate('/GenshinImpactHandbook/Home');},600)
      }
    function ChangeVideo(url){
        setTabVideoListAnimate(0)
        dispatch(setStoryCutscenesPlayingURL(url))
    }
    function VideoList(){
        return(
        <motion.div className="h-full w-full" style={{fontFamily: 'genshinFont'}}>
            <motion.div className="h-5/6 w-fit flex"              
                initial={{x: tabVideoListAnimate.initial}}
                animate={{x: tabVideoListAnimate.animate}}
                transition={{duration: 0.5, ease: 'easeOut'}}
                whileHover={{x: 0}} onHoverEnd={()=>{setTabVideoListAnimate({initial: 0, animate: -480})}}
            >
                <div className="h-full w-[30rem] overflow-y-auto bg-slate-400/20 px-10 py-5">
                    <ul>
                        {cutscenes.map((item,i)=>
                        <motion.li onClick={()=>{ChangeVideo(item.url)}} className="text-lg text-white my-5 cursor-pointer" whileHover={{scale:1.01}} whileTap={{scale:1}}>{item.name}</motion.li>
                        )}
                    </ul>
                </div>
                <div className="h-full w-[2rem] bg-slate-600"></div>
            </motion.div> 
        </motion.div>
        )
    }
    function StoryCutscenes(){
        return (
        <motion.div ref={refCharacterSelector} className="h-screen w-full absolute top-0 bg-black">           
            <div className="h-screen w-full absolute top-0 z-20">
                <div className="h-[10vh] w-11/12 mx-auto">
                    <div className="inline-block">
                    <motion.div onClick={RedirectBack} className="text-3xl text-white h-fit w-fit float-left mt-5 cursor-pointer"
                        whileHover={{scale:1.1}} whileTap={{scale:0.9}} style={{fontFamily: 'genshinFont'}}
                    >&lt; Back</motion.div>
                    </div>
                </div>
                <VideoList/>
            </div>
        </motion.div>   
        );
    }
    return(<>
        <div className="h-screen w-full absolute top-0 z-10">
            <ReactPlayer className='scale-custom-2 react-player' width={'100%'} height={'100%'} url={`https://www.youtube.com/embed/${playerURL}?autoplay=1`} playing={true} volume={0.2} muted={mute} loop={true}></ReactPlayer>
        </div>
        <StoryCutscenes/>
    </>);
}

