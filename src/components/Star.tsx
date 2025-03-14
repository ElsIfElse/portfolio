import { motion } from "framer-motion"
import React from "react";

interface StarProps{
    y:string
    x:string
    duration:number
    style:number
}


const Star:React.FC<StarProps> = ({x,y,duration,style}) => {

    const chooseAnimationX = (animStyle:number) => {
        switch(animStyle){
            case 1:
                return [0,4,8,3,0]
                break;
            case 2:
                return [0,-4,-2,3,0]
                break;
            case 3:
                return [0,2,-2,1,0]
                break;
            case 4:
                return [0,5,10,6,0]
                break;
            case 5:
                return [0,2,6,-4,0]
                break;
        }
    }

    return ( 
        <div className="fixed z-[20]" style={{transform:`translateY(${y}) translateX(${x})` }}>
            <motion.div 
            animate={{
                scale:[1,1.3,1],
                opacity:[0.4,0.9,0.6,0.7,0.4],
                translateX:chooseAnimationX(style),
                translateY:[0,3,9,5,0],
                backgroundColor:["#4c4c4c","#ffd250","#4c4c4c","#ffd250","#4c4c4c"]
            }}
            transition={{  
                times:[0,0.3,0.5,0.8,1],
                duration: duration,
                repeat:Infinity,

            }}
            className="rounded-full w-[3px] h-[3px] fixed blur-[1px]">

            </motion.div>            
        </div>
     );
}
 
export default Star;