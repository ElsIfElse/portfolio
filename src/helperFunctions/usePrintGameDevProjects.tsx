import ProjectCard from "../components/ProjectCard";

const usePrintGameDevProjects = () => {

    interface projectObject{
        name:string,
        image:string,
        description:string,
        stack:string[],
        link:string
    }

    const gameDevProjectsObject:projectObject[] =
    [
        {
            name:"Save the Sick",
            image:"/saveTheSick.png",
            description:"Developed a complete resource management RTS game with dynamic AI behavior Implemented complex resource allocation and player progression systemsCreated custom UI for resource tracking and management",
            stack:["Unity","C#","CineMachine"], 
            link:"https://youtu.be/8Y-82tufejI",
        },
        {
            name:"Pizza Fighter",
            image:"/pizzaFighter.png",
            description:"Project Description",
            stack:["React","Typescript","TailwindCSS"],
            link:"https://elseifelse.itch.io/pizza-fighter",
        },
        {
            name:"Escape The Room",
            image:"/saveTheSick.png",
            description:"Project Description",
            stack:["React","Typescript","TailwindCSS"],
            link:"https://save-the-sick.vercel.app/",
        }
        
    ] 

    return ( 
        <>
            {
                gameDevProjectsObject.map((project)=>(
                    <div key={project.name}>
                        <ProjectCard name={project.name} image={project.image} description={project.description} stack={project.stack} link={project.link}/>
                    </div>
                ))
            }
        </>
     );
}
 
export default usePrintGameDevProjects;