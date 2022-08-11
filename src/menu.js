import React, { useRef } from "react";
import { motion } from "framer-motion";
import { setMenuState, setSelectorState, setModelsDetail } from "./counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import ReactPlayer from "react-player";

export default function Menu(){
    const dispatch = useDispatch();
    const menuState = useSelector((state)=>state.counter.menuState);
    const models_detail = useSelector((state)=>state.counter.models_detail);
    const models_detail_visible = useSelector((state)=>state.counter.models_detail_visible);
    function MenuTab(){
      const refMenu = useRef(null);
        function MenuContent(){
          function RemoveMenu(){
            refMenu.current.classList.add('remove-menu');
            setTimeout(()=>dispatch(setMenuState(true)),600)
          }
          return(
            <>
            <div className='h-screen w-2/3 lg:w-1/3 float-left bg-white/80'>
              <nav className='flex-rows justify-start items-center w-2/4 h-fit mx-auto first:mt-36'>
                <motion.div className='h-20 w-fit text-4xl text-black cursor-pointer' style={{fontFamily: 'Merienda'}}>Menu</motion.div>
                <motion.div onClick={()=>{
                  RemoveMenu();
                  setTimeout(()=>dispatch(setSelectorState('Genshin Impact')),620)}} 
                  className='h-20 w-fit text-2xl text-black cursor-pointer mt-5' style={{fontFamily: 'Merienda'}} whileHover={{scale: 1.1}} whileTap={{scale: 1}}>Characters</motion.div>
                <motion.div onClick={RemoveMenu} className='h-20 w-fit text-2xl text-black cursor-pointer mt-5' style={{fontFamily: 'Merienda'}} whileHover={{scale: 1.1}} whileTap={{scale: 1}}>Back</motion.div>
              </nav>
            </div>
            <div onClick={RemoveMenu} className='h-screen w-1/3 lg:w-2/3 float-left'></div>
            </>
          )
        }       
        function MenuWrapper(props){       
          return(   
            <>  
            <motion.div ref={refMenu} className={`h-screen w-full fixed z-20 top-0 bg-black/60`}
            initial={{y: props.y_from}}
            animate={{y: props.y_to}}
            transition={{ease:'easeInOut', duration: 0.6}}
            >
              <motion.div className={`h-screen w-full absolute top-0`}
                initial={{x: props.x_from}}
                animate={{x: props.x_to}}
                transition={{ease:'easeInOut', duration: 0.8, delay: 0.2}}>
                <MenuContent/>
              </motion.div>  
            </motion.div>  
            </>      
          );
        }
        return(
          <>
            { menuState ? <MenuWrapper y_from={-2000} y_to={0} x_from={-2000} x_to={0}/> : null}
          </>
        );
    }
        
    function Render3D(){   
      const refModel = useRef(null);
      const refClassRender = useRef(null);
      function ShowcaseContent(){
        function RemoveModelsDetail(){
          refModel.current.classList.add('remove-models-detail');
          setTimeout(()=>dispatch(setModelsDetail(null)),600)
        }
        return(
            <>
            <div className="h-full w-full overflow-y-auto lg:overflow-hidden">
              <motion.div class="h-full w-full lg:w-1/2 float-left bg-black"
                initial={{x:0}}
                animate={{x:0}}
                transition={{duration: 2,ease:'easeInOut',delay:1}}
              >
                {/* {models_detail!==null ? <iframe className=' relative top-0' frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" src={`https://sketchfab.com/models/${models_detail.id}/embed?autostart=1&autospin=0.5&camera=0&ui_stop=0&dnt=1&ui_hint=0&ui_theme=dark&annotation_tooltip_visible=0`}></iframe> : null} */}
                {models_detail!==null ? <div ref={refClassRender} className="w-fit h-full mx-auto"><ReactPlayer url={`${models_detail.id}`} height={'100%'} width={'100%'} playing={true} loop={true}></ReactPlayer></div> : null}
              </motion.div>
              <div className="h-full w-full lg:w-1/2 float-right mr-0 relative">
                <div className="h-5/6 w-11/12 mx-auto">
                  <motion.div onClick={RemoveModelsDetail} className="text-3xl h-fit w-fit mt-5 cursor-pointer"
                    whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                  >&lt; Back</motion.div>
                  <div className="h-full w-full mt-5 overflow-y-auto overflow-x-hidden">
                  {models_detail!==null ? 
                        <>
                        <p className="text-xl text-center font-semibold truncate ">{models_detail.game}</p> 
                        <p className="text-3xl py-2 text-center font-bold truncate">{models_detail.name} {models_detail.otherName!=='' ? <font>- {models_detail.otherName}</font> : null}</p> 
                        <p className="text-xl text-center font-semibold truncate italic">{models_detail.type}</p> 
                        <hr className="border-black w-3/4 mx-auto mt-5"></hr>
                        <p className="text-lg text-start mt-5 break-normal" dangerouslySetInnerHTML={{__html: models_detail.content}}></p> 
                        </>:                   
                  null}
                  </div>
                </div>
              </div>
            </div>
            </>
        )
      } 
      function ShowcaseWrapper(props){       
        return(
          <motion.div ref={refModel} className='h-screen w-full fixed z-20 top-0 bg-white/90 bg-opacity-90'
            initial={{y: props.x_from}}
            animate={{y: props.x_to}}
            transition={{duration: 1.2,ease:'easeOut'}}
          >
            <ShowcaseContent/>
          </motion.div>
        );
      }
      return(
        <>
          {models_detail_visible ? <ShowcaseWrapper x_from={-2000} x_to={0}/> : null}
        </>
      );
    }
    return (<>
    <MenuTab/>
    <Render3D/>
    </>)
}