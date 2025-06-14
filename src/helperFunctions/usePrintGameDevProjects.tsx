import ProjectCardGameDev from "../components/ProjectCardGameDev";
const usePrintGameDevProjects = () => {

    interface projectObject{
        name:string,
        image:string,
        description:string,
        stack:string[],
        link:string,
    }

    const gameDevProjectsObject:projectObject[] =
    [
        {
            name:"Save the Sick",
            image:"./saveTheSick.png",
            description:"Developed a complete resource management RTS game with dynamic AI behavior Implemented complex resource allocation and player progression systemsCreated custom UI for resource tracking and management",
            stack:["Unity","C#","CineMachine"], 
            link:`project/00`,
        },
        {
            name:"Pizza Fighter",
            image:"./pizzaFighter.png",
            description:"Designed and developed an arcade-style survival shooter. Implemented wave-based enemy spawning with increasing difficulty. Created projectile and collision systems for engaging combat.",
            stack:["Unity","C#","Animator","Navmesh"],
            link:`project/01`,        
        },
        {
            name:"Void Blocks",
            image:"./voidBlocks.png",
            description:"Designed and developed an escape the room style 3d fps puzzle game with interactive environment and AI generated story commentary.",
            stack:["Unity","C#","Pro Builder","Animator"],
            link:`project/02`,        
        },
        {
            name:"RPG Survival",
            image:"./rpgImage.png",
            description:"Currently working on an isometric view RPG quest driven game with classic RPG combat system and ability upgrades and shop design.",
            stack:["Unity","C#","State Machines","Animation Layers","Combat System","Upgrade System"],
            link:`project/03`,        
        },
        {
            name:"Multiplayer FPS Shooter",
            image:"./fpsShooter.png",
            description:"Quake like multiplayer FPS shooter with pickable guns and health and a real time leaderboard of active players' kill score. ",
            stack:["Unity","C#","State Machines","Photon","Object Pooling"],
            link:`project/04`,        
        },
        {
            name:"The Machine",
            image:"./machineImage.PNG",
            description:"Arcade style fps item collector game where the given time and health determines the loose condition.",
            stack:["Unity","C#","MVC Pattern","Object Pooling","Unity Timeline","Cinemachine"],
            link:`project/05`,        
        },
        {
            name:"Forest Streamer",
            image:"./forestStreamer.png",
            description:"Stream simulator in the wild. Chat has wishes on what to show them and You have to record the animal or put a camera on them so You can switch view and collect donations.",
            stack:["Unity","C#","Behaviour Tree","Object Pooling","Cinemachine","Texture Rendering"],
            link:`project/06`,        
        },
    ] 

    return ( 
        <>
            {
                gameDevProjectsObject.map((project)=>(
                    <div  key={project.name}>
                        <ProjectCardGameDev name={project.name} image={project.image} description={project.description} stack={project.stack} link={project.link}/>
                    </div>
                ))
            }
        </>
     );
}
 
export default usePrintGameDevProjects;