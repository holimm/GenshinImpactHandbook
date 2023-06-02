import React, { useRef } from "react";
import { motion } from "framer-motion";
import { setModelsVisible, setModelsDetail, setMenuState } from "../counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

export default function ModelsDetailTab(){   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuState = useSelector((state)=>state.counter.menuState);
    const models_detail = useSelector((state)=>state.counter.models_detail);
    const models_detail_visible = useSelector((state)=>state.counter.models_detail_visible);
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