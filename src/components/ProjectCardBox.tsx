import usePrintFrontDevProjects from "../helperFunctions/usePrintFrontDevProjects";
import usePrintGameDevProjects from "../helperFunctions/usePrintGameDevProjects";
import {motion} from "framer-motion"

interface ProjectBoxProps{
    showGameDev:boolean
}

const ProjectsCardBox:React.FC<ProjectBoxProps> = ({showGameDev}) => {

    const gameProjectCards = usePrintGameDevProjects();
    const frontProjectCards2 = usePrintFrontDevProjects();

    return ( 
        <motion.div 
        key={showGameDev? "front" : "game"}
        animate={{opacity:[0.5,0.8,1],filter:["blur(3px)","blur(0px)"]}}
        transition={{
            duration:0.2,
            times:[0,0.8,1],
            ease:"linear"
        }}
        className="grid
        grid-cols-1 w-[100vw]
        sm:w-[640px]
        lg:grid-cols-2 lg:w-[1000px] px-8 gap-6 mt-4">
            {showGameDev ? gameProjectCards : frontProjectCards2}
        </motion.div>
     );
}
 
export default ProjectsCardBox;