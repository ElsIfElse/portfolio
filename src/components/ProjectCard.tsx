interface ProjectCardProps{
    name:string,
    image:string,
    description:string,
    stack:string[],
    link:string
}

const ProjectCard:React.FC<ProjectCardProps> = ({name,image,description,stack,link}) => {



    return ( 
        <a target="_blank" href={link} className="border border-slate-700 flex flex-col w-full px-6 py-6 bg-[rgba(10,10,10,1)] gap-6 h-[520px] rounded-md project-btn text-white
        hover:cursor-pointer hover:bg-slate-900 hover:-translate-y-1
        transition-all duration-200 ">
            <div className="flex flex-row gap-6 justify-center">
                <img className="h-[280px]" src={image} alt="" />
            </div>
            <div>
            <div className="flex flex-col gap-1">
                    <h3>{name}</h3>
                    <div className="flex flex-row">
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
 
export default ProjectCard;