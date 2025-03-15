import ProfileAvatar from "../components/ProfileAvatar";
import {motion} from "framer-motion"

const ProfileCardSection = () => {
    return ( 
        <div className=" 
        w-[100vw]
        md:w-[100%] 
        
        p-6 flex flex-col bg-[rgba(10,10,10,0.6)] px-10 gap-3 z-30 items-start">

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
                        className="ml-1 text-4xl -translate-y-2">👋</motion.h2>
                    </div>
                    <div className="flex flex-row items-center gap-2"> 
                        <div className="w-[7px] h-[7px] bg-green-500 rounded-full"></div>
                        <p>Available for work</p>
                    </div>
                    <div className="flex flex-row gap-1 translate-y-1">
                        <a href="https://www.linkedin.com/in/szabolcs-s%C3%A1p-mizera-4670b7205/" className="profile-link flex flex-row justify-center items-center gap-1"><img className="w-[20px] h-[20px]" src="https://img.icons8.com/ios11/512/linkedin.png" alt="" /> LinkedIn</a>
                        <a className="profile-link flex flex-row justify-center items-center gap-1" media="application/pdf" type="application/pdf" download={"szabolcs_sapi-mizera_cv.pdf"} href="./szabolcs_sapi-mizera_cv.pdf"><img className="w-[20px] h-[20px]" src="https://www.iconpacks.net/icons/1/free-document-icon-901-thumb.png" alt="" /> CV</a>
                    </div>
                </div> 
            </div>
            <p>Focused on <span className="font-bold text-[15px]">Game Mechanics Implementation</span> and <span className="font-bold text-[15px]">Frontend Development</span>. Looking for a Unity 
            Developer position to apply technical skills in a professional environment.</p>
        </div>
     );
}
 
export default ProfileCardSection;