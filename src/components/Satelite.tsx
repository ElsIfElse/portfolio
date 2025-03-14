import { motion } from "framer-motion";
import { useState } from "react";


const Satelite = () => {

    const [isClicked,setIsClicked] = useState<boolean>(false)

    const setIsClickedTrue = function(){
        setIsClicked(true)
        setTimeout(setIsClickedFalse,5000)
    }
    const setIsClickedFalse = function(){
        setIsClicked(false)
    }

    return ( 
        <motion.div 
        animate={{
            x:[-1000,-500,0,500,1000],
            y:[0,200,400,800,1200],
            opacity:[0,0.4,1,0.7,],
            rotateZ:[0,15,30,45,60],
            scale:[0.7,0.9,1,0.6],
            transition:{
                duration:60,
                times:[0,0.25,0.5,0.75,1],
                repeat:Infinity,
                ease:"linear"
            }
        }}
        className="fixed z-[9] w-[50px] translate-y-[300px]">
            <motion.img 
            animate={{
                scale:isClicked ? [1,0.8,0.5,0] : [0,1],
                rotateZ:isClicked ? [0,45,90,160,] : [0],
            }}
            onClick={()=>setIsClickedTrue()}
            className="" src="https://www.svgrepo.com/show/402646/satellite.svg" alt="" />
        </motion.div>
     );
}
 
export default Satelite;