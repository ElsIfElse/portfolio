import { useEffect } from "react";
import { useNavigate } from "react-router";

interface ProjectCardProps{
    name:string,
    image:string,
    description:string,
    stack:string[],
    link:string,
}

const ProjectCardGameDev:React.FC<ProjectCardProps> = ({name,image,description,stack,link}) => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Link: " + link);
    }, [link]);

    const handleClick = () => {
        navigate(link);
    }

    return ( 
        <a target="" onClick={handleClick} className="border border-slate-700 flex flex-col w-full px-6 py-6 bg-[rgba(10,10,10,1)] gap-6 h-[520px] rounded-md project-btn text-white
        hover:cursor-pointer hover:bg-slate-900 hover:-translate-y-1
        transition-all duration-200 ">
            <div className="flex flex-row gap-6 justify-center">
                <img className="
                h-[200px]
                lg:h-[280px]" src={image} alt="" />
            </div>
            <div>
            <div className="flex flex-col gap-1">
                    <h3>{name}</h3>
                    <div className="
                    
                    grid grid-cols-3 gap-1
                     md:gap-1 md:grid md:grid-col-2">
                        {stack.map((item,index)=><p className="tech-list" key={index+item}>{item}</p>)}
                    </div>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </a>
     );
}
 
export default ProjectCardGameDev;