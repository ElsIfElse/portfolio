
interface ProjectPageHeaderProps {
    headerText:string
}

const ProjectPageHeader:React.FC<ProjectPageHeaderProps> = ({headerText}) => {
    return ( 
        <div className="flex flex-col items-center gap-6 z-30">
            <h1>{headerText}</h1>
        </div>
     );
}

export default ProjectPageHeader;