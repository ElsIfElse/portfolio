interface ProjectInfoProps{
    productionTime:string,
    projectInfo:string
}

const ProjectPageProjectInfo:React.FC<ProjectInfoProps> = ({productionTime,projectInfo}) => {
    return ( 
        <div className="flex flex-col items-center max-w-[600px] gap-4">
            <div className="w-full flex flex-col items-center justify-center">

                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3>{projectInfo}</h3>
                    <div className="flex flex-col gap-0 items-center">
                        <h3>Production Time</h3>
                        <p>{productionTime}</p>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default ProjectPageProjectInfo;