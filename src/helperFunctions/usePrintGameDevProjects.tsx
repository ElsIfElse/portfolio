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
            image:"./saveTheSick.png",
            description:"Developed a complete resource management RTS game with dynamic AI behavior Implemented complex resource allocation and player progression systemsCreated custom UI for resource tracking and management",
            stack:["Unity","C#","CineMachine"], 
            link:"https://youtu.be/8Y-82tufejI",
        },
        {
            name:"Pizza Fighter",
            image:"./pizzaFighter.png",
            description:"Designed and developed an arcade-style survival shooter. Implemented wave-based enemy spawning with increasing difficulty. Created projectile and collision systems for engaging combat.",
            stack:["Unity","C#","Animator","Navmesh"],
            link:"https://elseifelse.itch.io/pizza-fighter",
        },
        {
            name:"Void Blocks",
            image:"./voidBlocks.png",
            description:"Designed and developed an escape the room style 3d fps puzzle game with interactive environment and AI generated story commentary.",
            stack:["Unity","C#","Pro Builder","Animator"],
            link:"https://elseifelse.itch.io/void-blocks",
        },
        {
            name:"RPG Survival",
            image:"./rpgImage.png",
            description:"Currently working on an isometric view RPG quest driven game with classic RPG combat system and ability upgrades and shop design.",
            stack:["Unity","C#","State Machines","Animation Layers","Combat System","Upgrade System"],
            link:"https://www.youtube.com/watch?v=oJqpW-Ra8TM&ab_channel=Elysium",
        }
        
    ] 

    return ( 
        <>
            {
                gameDevProjectsObject.map((project)=>(
                    <div  key={project.name}>
                        <ProjectCard name={project.name} image={project.image} description={project.description} stack={project.stack} link={project.link}/>
                    </div>
                ))
            }
        </>
     );
}
 
export default usePrintGameDevProjects;