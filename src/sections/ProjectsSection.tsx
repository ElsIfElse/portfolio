import { useEffect, useState } from "react";
import ProjectsCardBox from "../components/ProjectCardBox";
import {motion} from "framer-motion"

const ProjectsSection = () => {

    const [showGameProjects,setShowGameProjects] = useState<boolean>(true)
    const [projectType,setProjectType] = useState<string>("Webdev")

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
            <div className="flex flex-row justify-start items-start w-[1000px] px-10 py-2">
                <h2><span className="font-bold">{projectType}</span> projects</h2>
            </div>
            <div className="grid grid-cols-2 w-[940px] rounded-2x">
                <motion.button 
                whileHover={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.0)" : "rgba(28,45,50,0.3)"}}
                animate={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.0)" : "rgba(28,45,50,0.7)"}}
                transition={{
                    duration:0.2
                }}
                className="view-switch-btn" onClick={()=>showGameProj()}>Webdev</motion.button>

                <motion.button 
                whileHover={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.3)" : "rgba(28,45,50,0.0)"}}
                animate={{backgroundColor: showGameProjects ? "rgba(28,45,50,0.7)" : "rgba(28,45,50,0.0)"}}
                transition={{
                    duration:1
                }}
                className="view-switch-btn" onClick={()=>showFrontendProj()}>Gamedev</motion.button>
            </div>
            <ProjectsCardBox showGameDev={showGameProjects}/>
        </div>
     );
}
 
export default ProjectsSection;