interface ProjectInfoProps{
    productionTime:string,
    projectInfo:string,
    projectLink: string | undefined
}

const ProjectPageProjectInfo:React.FC<ProjectInfoProps> = ({productionTime,projectInfo,projectLink}) => {


    const info:string = projectLink ? projectLink : "";

    return ( 
        <div className="flex flex-col items-center max-w-[600px] gap-4">
            <div className="w-full flex flex-col items-center justify-center">

                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3>{projectInfo}</h3>
                    <div className="flex flex-col gap-0 items-center">
                        <h3>Production Time</h3>
                        <p>{productionTime}</p>
                        {info == "" ? null : <a href={info} className="underline z-20 mt-3 text-xl text-blue-500 hover:cursor-pointer hover:text-blue-300 hover:-translate-y-1 transition-all duration-300">Play this game on Itch.io!</a>} 
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default ProjectPageProjectInfo;