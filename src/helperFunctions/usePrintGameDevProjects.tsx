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
            name:"Castle of Doom",
            image:"./castleOfDoom.png",
            description:"Roguelite dungeon crawler game, heavily inspired by Ziggurat 2.",
            stack:["Unity","Cinemachine","Timeline","Cutscenes","WFC"],
            link:`project/00`,        
        },
        {
            name:"Feed the Light",
            image:"./feedTheLight.png",
            description:"You get locked into a weird garden and being chased by a monster that is moving faster depending on your torch's light level. Get out of the garden before the monster catches you.",
            stack:["Unity","State Machine","Cinemachine","Timeline","Cutscenes","WFC"],
            link:`project/01`,        
        },
        {
            name:"Don't Break the Glass",
            image:"./dontBreakTheGlass_03.png",
            description:"You are to deliver a piece of class to the customer that is waiting for you. Watch out for traffic and the careless locals. And most importantly, don't break the glass.",
            stack:["Unity","C#","State Machine","Cinemachine","Animator"],
            link:`project/02`,        
        },
        {
            name:"RPG Survival",
            image:"./rpgImage.png",
            description:"An isometric view RPG. Quest driven game with classic RPG combat system and ability upgrades and shop design.",
            stack:["Unity","C#","State Machines","Animation Layers","Combat System","Upgrade System"],
            link:`project/03`,        
        },
        {
            name:"Multiplayer FPS Shooter",
            image:"./fpsShooter.png",
            description:"Quake like multiplayer FPS shooter with pickable guns, health and a real time leaderboard of active players' kill score. ",
            stack:["Unity","C#","State Machines","Photon","Object Pooling"],
            link:`project/04`,        
        },
        {
            name:"Where is the Power?",
            image:"./whereIsThePower.png",
            description:"A first person view puzzle game where your TV session is interrupted by a storm and a power outage. Fix the main switch and continue the couch potato life. ",
            stack:["Unity","C#","Quick Iterations","Linear Storytelling"],
            link:`project/05`,        
        },
        {
            name:"The Machine",
            image:"./machineImage.PNG",
            description:"Arcade style fps item collector game with roguelike elmements, where the given time and health determines the loose condition. ",
            stack:["Unity","C#","MVC Pattern","Object Pooling","Unity Timeline","Cinemachine"],
            link:`project/06`,        
        },
        {
            name:"Forest Streamer",
            image:"./forestStreamer.png",
            description:"Stream simulator in the wild. Earn donations from viewers by fulfilling their wish and showing their wished animal on stream. Bond with animals so You can place cameras on them and follow them around. ",
            stack:["Unity","C#","Behaviour Tree","Object Pooling","Cinemachine","Texture Rendering"],
            link:`project/07`,        
        },
        {
            name:"The Island",
            image:"./islandGame.png",
            description:"Game prototype built to showcase inventory system and enemy state machine behaviour. ",
            stack:["Unity","C#","State Machine","Object Pooling","Cinemachine"],
            link:`project/08`,        
        },
        {
            name:"Save the Sick",
            image:"./saveTheSick.png",
            description:"Resource management RTS game with dynamic AI behavior. Reach the population goal and be aware of the sickness that is spreading around town. Hire doctors and make the right decisions.",
            stack:["Unity","C#","CineMachine"], 
            link:`project/09`,
        },
        {
            name:"Pizza Fighter",
            image:"./pizzaFighter.png",
            description:"Arcade-style survival shooter. Simple shooting mechanics and enemy wave spawning with increasing difficulty. ",
            stack:["Unity","C#","Animator","Navmesh"],
            link:`project/10`,        
        },
        {
            name:"Void Blocks",
            image:"./voidBlocks.png",
            description:"Designed and developed an escape the room style 3d fps puzzle game with interactive environment and audio story commentary.",
            stack:["Unity","C#","Pro Builder","Animator"],
            link:`project/11`,        
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