import { motion } from "framer-motion"
import React from "react";

interface FallingStarProps{

    duration:number
}


const FallingStar:React.FC<FallingStarProps> = ({duration}) => {

    


    return ( 
        <div className="fixed z-[20]" >
            <motion.div 
            animate={{
                scale:[1,1.8,2,2.2,3,3.3],
                opacity:[0.4,0.9,0.6,0.7,0.0],
                x:[
                    0,
                    500,
                    1000,
                    1500,
                    2000,
                    2500],
                y:[
                    0,
                    200,
                    400,
                    600,
                    800,
                    1000],
                backgroundColor:["#FAEABE","##ebb723","#FAEABE","##ebb723","#FAEABE"]
            }}
            transition={{  
                times:[
                    0,
                    0.2,
                    0.4,
                    0.6,
                    0.8,
                    1],
                duration: duration,
                repeatDelay:10,
                repeat:Infinity,
                ease:"linear"

            }}
            className="rounded-full w-[2px] h-[2px] fixed">

            </motion.div>            
        </div>
     );
}
 
export default FallingStar;