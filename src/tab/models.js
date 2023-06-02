import React, { useRef } from "react";
import { motion } from "framer-motion";
import { setModelsVisible, setModelsDetail, setMenuState } from "../counter/counterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

export default function ModelsTab(){
    const dispatch = useDispatch();
    const models_visible = useSelector((state)=>state.counter.models_visible);
    const models = useSelector((state)=>state.counter.models);
    const refCharacterSelector = useRef(null);
    function RemoveCharacterSelect(){
        refCharacterSelector.current.classList.add('remove-menu');
        setTimeout(()=>dispatch(setModelsVisible()),500)
        setTimeout(()=>dispatch(setMenuState()),500)
      }
    function CharList(){
        return (
        <motion.div ref={refCharacterSelector} className="h-screen w-full absolute top-0 bg-black/80"
            initial={{y:-2000}}
            animate={{y: 0}}
            transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <div className="h-fit w-11/12 mx-auto">
                <div className="inline-block">
                <motion.div onClick={RemoveCharacterSelect} className="text-3xl text-white h-fit w-fit float-left mt-5 cursor-pointer"
                    whileHover={{scale:1.1}} whileTap={{scale:0.9}} style={{fontFamily: 'genshinFont'}}
                >&lt; Back</motion.div>
                </div>
            </div>
            <div className="w-11/12 h-5/6 mx-auto mt-5 overflow-y-auto">
                <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {models.map(item=>{
                    return (
                        <div className="h-96 w-full relative">
                        <motion.div onClick={()=>{dispatch(setModelsDetail(item))}}
                        className="h-full w-full bg-top bg-no-repeat absolute inline-block cursor-pointer" style={{backgroundSize: '100%',backgroundImage: `url('${item.image}')`}}
                        whileHover={{backgroundSize: '110%'}}
                        whileTap={{scale:0.9}}
                        >
                            <div className="w-full h-2/6 bg-black/60 absolute bottom-0">
                                <p className="text-sm text-white text-center mt-6 italic" style={{letterSpacing: '2px'}}>{item.type.toUpperCase()}</p>
                                <p className="text-2xl text-white text-center" style={{letterSpacing: '2px'}}>{item.name.toUpperCase()}</p>
                            </div>
                        </motion.div>
                        </div>
                    );
                })}
                </div>
            </div>
        </motion.div>   
        );
    }
    return( <>{models_visible ? <CharList/> : null }</> );
}

