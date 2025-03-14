import TechImage from "../components/TechImage";


const usePrintSkillImages = () => {

    interface skillObject{
        name:string,
        image:string
    }

    const skillObjects:skillObject[] =  
    [
        {
            name:"HTML",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name:"CSS",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            name:"Javascript",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name:"Typescript",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            name:"React",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            name:"NextJs",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        {
            name:"Tailwind",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
            name:"NodeJs",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            name:"ExpressJs",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        },
        {
            name:"MongoDB",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
        },
        {
            name:"Zustand",
            image:"https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
        },
        {
            name:"Material UI",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        },
        {
            name:"C#",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        },
        {
            name:"C++",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            name:"Github",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        },
        {
            name:"Motion",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
        },
        {
            name:"Unity",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
        }
    ]
        
    
    return ( 
        <>
            {
                skillObjects.map((skill,index)=>(
                    <div 
                    key={index}>
                        <TechImage imageAddress={skill.image} techName={skill.name}/>
                    </div>
                ))
            }
        </>
     );
}
 
export default usePrintSkillImages;