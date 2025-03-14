import ProjectCard from "../components/ProjectCard";

const usePrintFrontDevProjects = () => {

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
            name:"Recipe App",
            image:"/recipeApp.png",
            description:"Developed a complete resource management RTS game with dynamic AI behavior Implemented complex resource allocation and player progression systemsCreated custom UI for resource tracking and management",
            stack:["React","Javascript","CSS","Vite","Typescript"], 
            link:"https://recipe-app-nine-iota.vercel.app/",
        },
        {
            name:"Dine at Mine",
            image:"/dineAtMine.png",
            description:"Designed and implemented a responsive restaurant website. Created animated UI elements and interactive menu components",
            stack:["React","Typescript","TailwindCSS","Material UI"],
            link:"https://dineatmine.vercel.app/",
        },
        {
            name:"DnD Npc database",
            image:"/dndSite.png",
            description:"Developed a tool for Dungeon Masters to manage NPC characters. Implemented complete database functionality with filtering options.",
            stack:["React","Typescript","TailwindCSS","NextJs"],
            link:"https://egylet.vercel.app/",
        },
        {
            name:"AI companionship",
            image:"/aiCom.png",
            description:"Created an AI chatbot with customizable personality settings. Implemented responsive conversation UI with message history ",
            stack:["React","Typescript","TailwindCSS","Huggingface"],
            link:"https://next-ai-companionship.vercel.app/",
        },
        
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
 
export default usePrintFrontDevProjects;