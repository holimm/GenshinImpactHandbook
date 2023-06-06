import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { setModelsVisible, setModelsDetail, setMenuState, setStoryCutscenesVisible, setStoryCutscenesPlaying } from "../counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

export default function StoryCutscenes(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const refVolumeRange = useRef(null)
    const [playing,setPlaying] = useState(true)
    const [mute,setMute] = useState(false)
    const [volume,setVolume] = useState(0.2)
    const [currentCategory,setCurrentCategory] = useState("Main Story")
    const [tabVideoListAnimate,setTabVideoListAnimate] = useState({initial: -480, animate: -480})
    const [tabControllerAnimate,setTabControllerAnimate] = useState({initial: 150, animate: 0})
    const [tabChangeAnimate,setTabChangeAnimate] = useState({initial: 0, animate: '-100vh'})
    const cutscenes = useSelector((state)=>state.counter.story_cutscenes);
    const currentCutscene = useSelector((state)=>state.counter.story_cutscenes_playing);
    const refTabAnimation = useRef(null)
    function RedirectBack(){
        // refTabAnimation.current.classList.add('animation_close');
        setTabChangeAnimate({initial: '-100vh', animate: 0})
        setTimeout(()=>{dispatch(setMenuState(true));navigate('/GenshinImpactHandbook/Home');},1100)
      }
    function ChangeVideo(object){
        setTabVideoListAnimate(0)
        dispatch(setStoryCutscenesPlaying(object))
    }
    function handlePlay(){
        setTabControllerAnimate({initial: 0, animate: 0})
        setTabVideoListAnimate({initial: -480, animate: -480})
        setPlaying(!playing)
    }
    const handleChangeVolume = (e) => {
        let volume = e.target.value / 100;     
        setVolume(volume);
    }
    function handleCategoryChange(e){
        e.target.value==0 ? setCurrentCategory("Main Story") :
        e.target.value==1 ? setCurrentCategory("Character Tales") :
        e.target.value==2 ? setCurrentCategory("Event Cutscene") : setCurrentCategory("Main Story");
    }

    function StoryCutscenes(){
        return (<>
            <div className="h-[8vh] w-11/12 mx-auto flex justify-start items-center absolute top-0 z-30 bg"  style={{fontFamily: 'genshinFont'}}>
                <div className="h-fit w-2/12 px-10">
                    <motion.div onClick={RedirectBack} className="h-fit w-fit text-3xl text-white float-left mt-5 cursor-pointer"
                        whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                    >&lt; Back</motion.div>
                </div>   
                <div className="h-fit w-10/12 flex justify-center px-10">
                    <a href={currentCutscene[0].ytb_url} target="_blank" className="h-fit w-full text-3xl text-start text-white float-left mt-5 cursor-pointer truncate">{currentCutscene[0].ytb_name}</a>
                </div>                
            </div>
        </>);
    }
    return(<>       
        {currentCutscene.length !== 0 && currentCutscene &&
        <div className="h-screen w-full absolute top-0 z-10 bg-black">
            <ReactPlayer className='scale-custom-2 react-player' width={'100%'} height={'100%'} url={`https://www.youtube.com/embed/${currentCutscene[0].url}?autoplay=1&start=3`} playing={playing} volume={volume} muted={mute} loop={true}></ReactPlayer>
        </div>}
        <div onClick={()=>{handlePlay()}} className="h-screen w-full absolute top-0 z-20"></div>
        <StoryCutscenes/>
        {/* Video List Tab */}
        <motion.div className="h-[90vh] w-fit mt-[15vh] absolute top-0 z-30" style={{fontFamily: 'genshinFont'}}>
            <motion.div className="h-5/6 w-fit flex"              
                initial={{x: tabVideoListAnimate.initial}}
                animate={{x: tabVideoListAnimate.animate}}
                transition={{duration: 0.5, ease: 'easeOut'}}
                whileHover={{x: 0}} onHoverEnd={()=>{
                    setTabVideoListAnimate({initial: 0, animate: -480})
                    setTabControllerAnimate({initial: 0, animate: 0})
                }}
            >
                <div className="h-full w-[30rem] bg-black/20 backdrop-blur-md">
                    <div className='h-20 w-full mt-4 flex justify-center items-center mx-auto text-white rounded-full appearance-none focus:ring-0 cursor-pointer'>
                        <div className='w-full'>
                            <p className='text-center text-white text-2xl'>{currentCategory}</p>
                            <div className="h-fit w-full flex justify-center items-center my-4">
                                <input type={'range'} onChange={handleCategoryChange} className='appearance-none rounded-xl p-0 h-1 w-1/2 mx-auto bg-slate-100' min={0} max={2} defaultValue={0}/>
                            </div>
                        </div>                         
                    </div> 
                    <div className="h-5/6 w-full px-10 overflow-y-auto">
                        <ul>
                            {cutscenes.filter(item=>item.category === currentCategory).map((item,i)=>
                            <motion.li onClick={()=>{ChangeVideo(item.name)}} className="text-lg text-white my-5 cursor-pointer flex" key={i} whileHover={{scale:1.01}} whileTap={{scale:1}}>
                                <img className="h-6 w-6 mr-2" src="./image/icon/play_circle.svg"></img>{item.name}
                            </motion.li>
                            )}
                        </ul>
                    </div>
                    <div className="h-[5vh] w-full"></div>
                </div>
                <div className="h-full w-[0.5rem] bg-white"></div>
            </motion.div> 
        </motion.div>
        {/* Video List Tab */}
        {/* Controller */}
        <div className="h-20 w-full absolute bottom-20 z-30">
            <motion.div className='h-fit w-fit flex justify-between items-center px-5 py-3 mx-auto bg-slate-400 bg-opacity-30 backdrop-blur-xl rounded-full'
                initial={{y: tabControllerAnimate.initial}}
                animate={{y: tabControllerAnimate.animate}}
                transition={{duration: 1.6, ease: 'easeInOut'}}
                >         
                    <motion.div whileHover={{scale:1.05}} whileTap={{scale: 1}} transition={{ease: 'easeInOut'}}>
                    <button onClick={handlePlay} className='h-16 w-16 lg:h-20 lg:w-20 mx-1 lg:mx-5 text-lg bg-transparent border-2 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={`./image/icon/${playing ? "pause" : "play"}.svg`} alt='PlayIcon'/></button>  
                    </motion.div>
                    <motion.div whileHover={{scale:1.05}} whileTap={{scale: 1}} transition={{ease: 'easeInOut'}}>
                    <button className='h-16 w-16 lg:h-20 lg:w-20 mx-1 lg:mx-5 text-lg bg-transparent border-2 transition duration-300 ease-in-out text-white rounded-full'><img className='h-12 w-12 mx-auto' src={'./image/icon/speaker.svg'} alt='VolumeIcon'/></button>   
                    </motion.div>
                    <input onChange={handleChangeVolume} ref={refVolumeRange} type={'range'} className='appearance-none rounded-xl p-0 h-1 bg-slate-100' min={0} max={100} defaultValue={20}/>          
            </motion.div>
        </div>
        {/* Controller */}
        <motion.div className="h-screen w-full absolute top-0 z-50 bg-white" initial={{y:tabChangeAnimate.initial}} animate={{y: tabChangeAnimate.animate}} transition={{ease: 'easeInOut', duration: 1}}></motion.div>
    </>);
}

