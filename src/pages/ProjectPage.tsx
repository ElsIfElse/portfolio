import { useNavigate, useParams } from "react-router";
import ProjectPageHeader from "../components/ProjectPageHeader";
import ProjectPageProjectHighlight from "../components/ProjectPageProjectHighlight";
import ProjectPageProjectInfo from "../components/ProjectPageProjectInfor";
import Satelite from "../components/Satelite";
import BackgroundGrid from "../sections/BackgroundGrid";
import StarHolder from "../sections/StarHolder";
import { useEffect } from "react";
import { projectInfo, projectInfos } from "../helperFunctions/projectData";

const ProjectPage = () => {
    
    const {id} = useParams();
    const projData:projectInfo = projectInfos[Number(id)];
    const navigate = useNavigate();

    useEffect(() => {
        console.log("ProjectPage",projData);
    }, [projData]);

    const clickHandle = ()=>{
        navigate("/portfolio/");
    }
    
    return ( 
        <div className='min-h-[100vh] h-full flex flex-col items-center justify-start max-w-[600px] pt-6 gap-6
            md:w-[600px]
            sm:w-[570px]
            lg:w-[940px]
        ' >
            <ProjectPageHeader headerText={projData.name} />
            <ProjectPageProjectHighlight highlightLink={projData.projectHighlightLink} highlightImage_01={projData.projectHighlightImage_01} highlightImage_02={projData.projectHighlightImage_02} highlightDescription={projData.projectHighlightDescription}/>
            <ProjectPageProjectInfo productionTime={projData.projectDuration} projectInfo={projData.projectInformation}/>

            <BackgroundGrid/>
            <StarHolder/>
            <Satelite/>
            <button onClick={clickHandle} className="w-[200px] h-[50px] bg-[#000000] text-[#ffffff] rounded-lg hover:scale-105 transition-all duration-300 z-20 hover:cursor-pointer">Back Home</button>
        </div>  

     );
}
 
export default ProjectPage;