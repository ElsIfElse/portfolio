import usePrintFrontDevProjects from "../helperFunctions/usePrintFrontDevProjects";
import usePrintGameDevProjects from "../helperFunctions/usePrintGameDevProjects";

interface ProjectBoxProps{
    showGameDev:boolean
}

const ProjectsCardBox:React.FC<ProjectBoxProps> = ({showGameDev}) => {

    const gameProjectCards = usePrintGameDevProjects();
    const frontProjectCards2 = usePrintFrontDevProjects();

    return ( 
        <div className="grid grid-cols-2 w-[1000px] px-8 gap-6 mt-4">
            {showGameDev ? frontProjectCards2 : gameProjectCards}
        </div>
     );
}
 
export default ProjectsCardBox;