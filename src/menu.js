import React, { useRef } from "react";
import { motion } from "framer-motion";
import { setMenuState, setSelectorState, setModelsDetail } from "./counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Slider from "react-slick";

export default function Menu(){
    const dispatch = useDispatch();
    const menuState = useSelector((state)=>state.counter.menuState);
    const selectorState = useSelector((state)=>state.counter.selectorState);
    const models = useSelector((state)=>state.counter.models);
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
            <div className='h-screen w-1/3 float-left bg-white/80'>
              <nav className='flex-rows justify-start items-center w-2/4 h-fit mx-auto first:mt-36'>
                <motion.div className='h-20 w-fit text-4xl text-black cursor-pointer'>Menu</motion.div>
                <motion.div onClick={()=>{
                  RemoveMenu();
                  setTimeout(()=>dispatch(setSelectorState('Honkai Impact')),620)}} 
                  className='h-20 w-fit text-2xl text-black cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 1}}>Honkai Impact</motion.div>
                <motion.div onClick={()=>{
                  RemoveMenu();
                  setTimeout(()=>dispatch(setSelectorState('Genshin Impact')),620)}} 
                  className='h-20 w-fit text-2xl text-black cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 1}}>Genshin Impact</motion.div>
                <motion.div onClick={RemoveMenu} className='h-20 w-fit text-2xl text-black cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 1}}>Back</motion.div>
              </nav>
            </div>
            <div onClick={RemoveMenu} className='h-screen w-2/3 float-left'></div>
            </>
          )
        }       
        function MenuWrapper(props){       
          return(   
            <>  
            <motion.div ref={refMenu} className={`h-screen w-full absolute top-0 bg-black/60`}
            initial={{y: props.y_from}}
            animate={{y: props.y_to}}
            transition={{ease:'easeInOut', duration: 1}}
            >
              <motion.div className={`h-screen w-full absolute top-0`}
                initial={{x: props.x_from}}
                animate={{x: props.x_to}}
                transition={{ease:'easeInOut', duration: 1.2, delay: 0.5}}>
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
    function SelectorTab(){       
      const refSelector = useRef(null);
        function SelectorContent(){    
          let maximum_slide; 
          if(models!==null){       
            models.filter(myfilter=>{return myfilter.game===selectorState}).length < 4 ? maximum_slide = models.filter(myfilter=>{return myfilter.game===selectorState}).length : maximum_slide = 4; 
          }    
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: maximum_slide,
            slidesToScroll: maximum_slide,
            customPaging: i => (
              <div className="h-3 w-3 mt-10 rounded-full bg-white hover:bg-slate-500"></div>
            )
          };
          function RemoveSelector(){
            refSelector.current.classList.add('remove-selector');
            setTimeout(()=>dispatch(setSelectorState(null)),600)
          }
            return(<>
                <div className="h-fit w-10/12 mx-auto my-5">
                    <motion.div onClick={RemoveSelector} className='h-fit w-fit text-3xl text-white cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 1}}>Back</motion.div>
                </div>            
                <div className="h-3/4 w-10/12 mt-32 mx-auto">
                <Slider {...settings}>
                    {models.filter(myfilter=>{return myfilter.game===selectorState}).map(item=>{
                        return (
                          <div className="h-96 w-full">
                            <motion.div onClick={()=>{
                              RemoveSelector();
                              setTimeout(()=>{dispatch(setModelsDetail(item))},620)
                            }} className="h-full w-11/12 bg-cover bg-center inline-block relative cursor-pointer" style={{backgroundImage: `url('${item.image}')`}}
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.9}}
                            >
                              <div className="w-full h-fit px-5 py-5 mx-auto bg-white mt-64">
                                <p className="text-3xl text-center">{item.name}</p>
                              </div>
                            </motion.div>
                          </div>
                        );
                    })}
                </Slider>
                </div>    
            </>);
        }
        function SelectorWrapper(props){
          return(
            <motion.div ref={refSelector} className={`h-screen w-full absolute top-0 bg-black/80`}
            initial={{y: props.y_from}}
              animate={{y: props.y_to}}
              transition={{ease:'easeInOut', duration: 1}}
            >
            <SelectorContent/>
            </motion.div>   
          );
        }
        return(
          <>
            { selectorState!==null ? <SelectorWrapper y_from={-2000} y_to={0}/> : null}
          </>
        );
    }
    function Render3D(){   
      const refModel = useRef(null);
      function ShowcaseContent(){
        function RemoveModelsDetail(){
          refModel.current.classList.add('remove-models-detail');
          setTimeout(()=>dispatch(setModelsDetail(null)),1000)
        }
        return(
            <>
            <motion.div class="h-full w-7/12 float-left"
              initial={{x:0}}
              animate={{x:0}}
              transition={{duration: 2,ease:'easeInOut',delay:1}}
            >
              {models_detail!==null ? <iframe className=' relative top-0' frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="100%" src={`https://sketchfab.com/models/${models_detail.id}/embed?autostart=1&autospin=0.5&camera=0&ui_stop=0&dnt=1&ui_hint=0&ui_theme=dark&annotation_tooltip_visible=0`}></iframe> : null}
            </motion.div>
            <div className="h-full w-5/12 float-left mx-auto relative">
              <div className="h-5/6 w-10/12 mx-auto">
                <motion.div onClick={RemoveModelsDetail} className="text-3xl h-fit w-fit mt-5 cursor-pointer"
                  whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                >&lt; Back</motion.div>
                <div className="h-full w-full mt-5 overflow-y-auto overflow-x-hidden">
                {models_detail!==null ? 
                      <>
                      <p className="text-3xl py-2 text-center font-bold truncate">{models_detail.name}</p> 
                      <p className="text-xl text-center font-semibold truncate ">{models_detail.game}</p> 
                      <hr className="border-black w-3/4 mx-auto mt-5"></hr>
                      <p className="text-lg text-start mt-5 break-normal" dangerouslySetInnerHTML={{__html: models_detail.content}}></p> 
                      </>:                   
                null}
                </div>
              </div>
            </div>
            </>
        )
      } 
      function ShowcaseWrapper(props){       
        return(
          <motion.div ref={refModel} className='h-screen w-full absolute top-0 bg-white/80'
            initial={{x: props.x_from}}
            animate={{x: props.x_to}}
            transition={{duration: 2,ease:'easeInOut'}}
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
    <SelectorTab/>
    <Render3D/>
    </>)
}