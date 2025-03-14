import { useEffect, useState } from "react";
import ProjectsCardBox from "../components/ProjectCardBox";
import {motion} from "framer-motion"

const ProjectsSection = () => {

    const [showGameProjects,setShowGameProjects] = useState<boolean>(true)
    const [projectType,setProjectType] = useState<string>("Webdev")

    const dotAnimation = {
        opacity:[0.8,1,0.8],
        transition:{
            duration:5,
            times:[0,0.5,1],
            repeat:Infinity,
            ease:"linear"
        }
    }

    const showGameProj = function(){
        setShowGameProjects(true)
        setProjectType("Frontdev")
    }
    const showFrontendProj = function(){
        setShowGameProjects(false)
        setProjectType("Gamedev")
    }

    useEffect(()=>{
        showGameProj()
    },[])


    return ( 
        <div className="section">
            <div className="flex flex-row justify-start items-start 
            w-[100vw]
            sm:w-[640px]
            lg:w-[1000px] px-10 py-2">
                <h2><span className="font-bold">{projectType}</span> projects</h2>
            </div>
            <div className="grid grid-cols-2 
            w-[80vw] gap-0
            sm:w-[570px]
            lg:w-[940px] lg:gap-0">
                <motion.button 
                whileHover={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.0)" : "rgba(28,45,50,0.3)"}}
                animate={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.0)" : "rgba(28,45,50,0.7)"}}
                transition={{
                    duration:0.2
                }}
                className="view-switch-btn" onClick={()=>showGameProj()}>{showGameProjects ? <motion.div 
                animate={dotAnimation}
                className="w-[6px] blur-[1px] h-[6px] bg-green-600 rounded-full"></motion.div> : <div className="w-[6px] blur-[1px] h-[6px] bg-rgba(28,45,50,0) rounded-full"></div>}Webdev</motion.button>

                <motion.button 
                whileHover={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.3)" : "rgba(28,45,50,0.0)"}}
                animate={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.7)" : "rgba(28,45,50,0.0)"}}
                transition={{
                    duration:1
                }}
                className="view-switch-btn" onClick={()=>showFrontendProj()}>{showGameProjects ? <div className="w-[6px] blur-[1px] h-[6px] bg-rgba(28,45,50,0) rounded-full"></div> : <motion.div 
                animate={dotAnimation}
                className="w-[6px] blur-[1px] h-[6px] bg-green-600 rounded-full"></motion.div>}Gamedev</motion.button>
            </div>
            <ProjectsCardBox showGameDev={showGameProjects}/>
        </div>
     );
}
 
export default ProjectsSection;