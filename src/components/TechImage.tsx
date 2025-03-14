import React, {useState } from "react";
import {motion } from "framer-motion";

interface TechImageProps{
    imageAddress:string
    techName:string
}



const TechImage:React.FC<TechImageProps> = ({imageAddress,techName}) => {

    const [isTapped,setIsTapped] = useState<boolean>(false)
    const [isHovered,setIsHovered] = useState<boolean>(false)

    
    return ( 
        <motion.div 
            whileHover={{filter:"grayscale(0)",backgroundColor:"rgba(13,84,45,1)",scale:1.05}}
            transition={{duration:0.2}}
            onTap={()=>setIsTapped(!isTapped)}
            onHoverStart={()=>setIsHovered(true)}
            onHoverEnd={()=>setIsHovered(false)}
            animate={{backgroundColor:isTapped ? "rgba(13,84,45,1)" : "rgba(10,10,10,1)",filter:isTapped ? "grayscale(0) contrast(100%)" : "grayscale(50) contrast(100%)"}}
            className="
            border border-slate-700 w-[110px] h-[80px] rounded-md flex flex-col items-center justify-center border-box gap-1 mt-3 grayscale-0 bg-[rgba(10,10,10,0.6)] hover:cursor-pointer">
                <motion.img 
                animate={{translateY:isHovered ? -4 : 1}}
                transition={{duration:0.2}}
                
                className="w-[35px] h-[35px]" src={imageAddress} />
                <p className="text-sm">{techName}</p>
        </motion.div>
     );
}
 
export default TechImage;