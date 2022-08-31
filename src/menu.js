import React, { useRef } from "react";
import { motion } from "framer-motion";
import { setMenuState, setSelectorState, setModelsDetail } from "./counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";

export default function Menu(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuState = useSelector((state)=>state.counter.menuState);
    const models_detail = useSelector((state)=>state.counter.models_detail);
    const models_detail_visible = useSelector((state)=>state.counter.models_detail_visible);
    function MenuTab(){
      const refMenu = useRef(null);
      function RemoveMenu(){
        refMenu.current.classList.add('remove-menu');
        setTimeout(()=>dispatch(setMenuState(true)),600)
      }
      function BackToLoginScreen(){
        refMenu.current.classList.add('remove-menu');
        setTimeout(()=>{dispatch(setMenuState(true));navigate('/GenshinImpactHandbook');},600)
      }
      function MenuContent(){    
        return(
          <>
          <div className='h-screen w-2/3 lg:w-5/12 float-left bg-white/80'>
            <div className="h-60 w-full flex justify-start bg-gradient-to-b from-black/70 to-sky-600/70 pb-2">
              <div className="h-fit w-1/3 flex-rows justify-center mt-6">
                  <div className="h-32 w-32 mx-auto rounded-full bg-amber-500 border-4 border-white">
                    <div className="h-full w-full rounded-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(../image/lumine.png)`}}></div>                  
                  </div>
                  <div className="h-7 w-10/12 mx-auto mt-4 rounded-full bg-slate-700 border-2 border-gray-400">
                    <p className=" text-slate-200 ml-2" style={{fontFamily:'genshinFont'}}>UID</p>
                  </div>
              </div>
              <div className="h-full w-2/3">
                <div className="h-2/5 w-11/12 inline-block">
                  <p className="text-2xl text-slate-200 mt-6 bg-slate-700/40" style={{fontFamily: 'genshinFont', letterSpacing: '2px'}}>Tabibito-san</p>               
                </div>
                <div className="h-3/5 w-11/12 inline-block">
                  <div className="h-1/4 w-full">
                    <div className="float-left h-full w-3/4"><p className="text-lg text-slate-200 bg-slate-700/30 text-start" style={{fontFamily: 'genshinFont'}}>Adventure Rank</p></div>
                    <div className="float-left h-full w-1/4"><p className="text-lg text-slate-200 bg-slate-700/30 text-end" style={{fontFamily: 'genshinFont'}}>45&nbsp;</p></div>
                  </div>   
                  <div className="h-1/4 w-full flex justify-start">
                    <img src='../image/adventurexp.webp'></img>
                    <div className="h-full w-full">
                      <div className="h-fit w-full">
                        <div className="float-left h-full w-2/3"><p className="text-md text-slate-200  text-start" style={{fontFamily: 'genshinFont'}}>Adventure XP</p></div>
                        <div className="float-left h-full w-1/3"><p className="text-md text-slate-200 text-start" style={{fontFamily: 'genshinFont'}}>&nbsp;3837/15350</p></div>
                      </div>
                      <div className="h-fit w-full">
                        <div className="h-1 w-4/12 bg-lime-500 float-left"></div>
                        <div className="h-1 w-8/12 bg-slate-700 float-left"></div>
                      </div>
                    </div>
                  </div> 
                  <div className="h-1/4 w-full">
                    <div className="h-1/4 w-full">
                      <div className="float-left h-full w-3/4"><p className="text-lg text-slate-200 bg-slate-700/30 text-start" style={{fontFamily: 'genshinFont'}}>World Level</p></div>
                      <div className="float-left h-full w-1/4"><p className="text-lg text-slate-200 bg-slate-700/30 text-end" style={{fontFamily: 'genshinFont'}}>6&nbsp;</p></div>
                    </div>  
                  </div> 
                  <div className="h-1/4 w-full">
                    <div className="h-1/4 w-full">
                      <div className="float-left h-full w-3/4"><p className="text-lg text-slate-200 text-start" style={{fontFamily: 'genshinFont'}}>Birthday</p></div>
                      <div className="float-left h-full w-1/4"><p className="text-lg text-slate-200 text-end" style={{fontFamily: 'genshinFont'}}>- / -</p></div>
                    </div> 
                  </div>  
                </div>
              </div>
            </div>
            <div className='w-11/12 h-full grid grid-cols-4 mx-auto'>
              <motion.div onClick={()=>{
                RemoveMenu();
                setTimeout(()=>dispatch(setSelectorState('Genshin Impact')),620)}} 
                className='h-32 w-32 flex-rows justify-center items-center text-lg text-center text-slate-200 cursor-pointer mt-5 bg-slate-600 border-4 border-slate-500' style={{fontFamily: 'genshinFont'}} whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
                <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url('../image/icon/characterIcon.webp')`,backgroundSize: '60%', backgroundPositionY: '25%'}}>
                  <div className="h-4/6 w-full"></div>
                  <p className="mt-2">Models</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div onClick={RemoveMenu} className='h-screen w-1/3 lg:w-7/12 float-left'></div>
          </>
        )
      }       
      function MenuWrapper(props){       
        return(   
          <>  
          <div ref={refMenu} className="h-screen w-full fixed z-20 top-0">
            <motion.div className={`h-screen w-20 absolute z-20 bg-gradient-to-b from-stone-800/70 via-slate-700/70 to-stone-800/70 border-l-2 border-r-2 border-yellow-300/80`}
            initial={{y: props.y_from}}
            animate={{y: props.y_to}}
            transition={{ease:'easeInOut', duration: 0.6}}
            >     
              <div className="h-1/6 w-full">
                <motion.div onClick={RemoveMenu} className="h-14 w-14 mx-auto mt-5 rounded-full bg-orange-50 border-4 border-slate-500 cursor-pointer" whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
                  <div className="h-full w-full rounded-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url('../image/icon/back.svg')`,backgroundSize: '80%'}}></div>                 
                </motion.div>
              </div>
              <div className="h-4/6 w-full"></div>
              <div className="h-1/6 w-full">
                <motion.div onClick={BackToLoginScreen} className="h-14 w-14 mx-auto mt-5 rounded-full cursor-pointer" whileHover={{scale: 1.1}} whileTap={{scale: 1}}>
                  <div className="h-full w-full rounded-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url('../image/icon/back2.svg')`,backgroundSize: '80%'}}></div>
                </motion.div>
              </div>
            </motion.div>  
            <motion.div className={`h-screen w-full absolute top-0`}
              initial={{x:80,y: props.x_from}}
              animate={{y: props.x_to}}
              transition={{ease:'easeInOut', duration: 0.8, delay: 0.2}}>
              <MenuContent/>
            </motion.div>  
          </div>
          </>      
        );
      }
      return(
        <>
          { menuState ? <MenuWrapper y_from={-2000} y_to={0} x_from={2000} x_to={10}/> : null}
        </>
      );
    }
        
    function Render3D(){   
      const refModel = useRef(null);
      const refClassRender = useRef(null);
      function ShowcaseContent(){
        function RemoveModelsDetail(){
          refModel.current.classList.add('remove-models-detail');
          setTimeout(()=>dispatch(setModelsDetail(null)),1200)
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
            transition={{duration: 1,ease:'easeOut'}}
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