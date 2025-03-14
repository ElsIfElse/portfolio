import ProfileAvatar from "../components/ProfileAvatar";
import {motion} from "framer-motion"

const ProfileCardSection = () => {
    return ( 
        <div className=" w-[100%] p-6 flex flex-col bg-[rgba(10,10,10,0.6)] px-10 gap-3 z-30">

            <div className="flex flex-row items-center justify-start gap-3">
                <ProfileAvatar/>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-start">

                        <h1>Hey, I'm Szabi</h1>
                        <motion.h2 
                        whileHover={{
                            rotateZ:["0deg","20deg","0deg","20deg","0deg","20deg","0deg"],
                            transition:{
                                duration:1.5,
                                times:[0,0.2,0.4,0.6,0.8,1]
                            }
                        }}
                        className="text-4xl -translate-y-3">👋</motion.h2>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[7px] h-[7px] bg-green-500 rounded-full"></div>
                        <p>Available for work</p>
                    </div>
                    
                </div> 
            </div>
            <p>Focused on Frontend Development and game mechanics implementation. Looking for a Unity
            Developer position to apply technical skills in a professional environment.</p>
        </div>
     );
}
 
export default ProfileCardSection;