import { useState } from "react";
import { motion } from "framer-motion";

const ProfileAvatar = () => {

    const [isHovered,setIsHovered] = useState<boolean>(false)

    return ( 
        <motion.div 
        onHoverStart={()=>setIsHovered(true)}
        onHoverEnd={()=>setIsHovered(false)}
        
        className="rounded-full border-4 border-slate-700 w-[100px] h-[100px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
            {isHovered ? <img className="scale-130 translate-y-1 -translate-x-1" src="./smiling.JPG" alt="" /> : <img className="scale-130" src="./serious.JPG" alt="" />}
        </motion.div>
     );
}
 
export default ProfileAvatar;