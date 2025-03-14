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
            image:`${import.meta.env.BASE_URL}recipeApp.png`,
            description:"Built a full-stack social media platform for cooking enthusiasts. Implemented user authentication and profile management. Created CRUD operations for recipe posting and interaction.Implemented live chat system with websockets.",
            stack:["React","Javascript","CSS","Vite","Typescript","Websockets"], 
            link:"https://recipe-app-nine-iota.vercel.app/",
        },
        {
            name:"Dine at Mine",
            image:`${import.meta.env.BASE_URL}dineAtMine.png`,
            description:"Designed and implemented a responsive restaurant website. Created animated UI elements and interactive menu components",
            stack:["React","Typescript","TailwindCSS","Material UI"],
            link:"https://dineatmine.vercel.app/",
        },
        {
            name:"DnD Npc database",
            image:`${import.meta.env.BASE_URL}dndSite.png`,
            description:"Developed a tool for Dungeon Masters to manage NPC characters. Implemented complete database functionality with filtering options.",
            stack:["React","Typescript","TailwindCSS","NextJs","Express","MongoDb"],
            link:"https://egylet.vercel.app/",
        },
        {
            name:"AI companionship",
            image:`${import.meta.env.BASE_URL}aiCom.png`,
            description:"Created an AI chatbot with customizable personality settings. Implemented responsive conversation UI with message history ",
            stack:["React","Typescript","TailwindCSS","Huggingface","Express"],
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