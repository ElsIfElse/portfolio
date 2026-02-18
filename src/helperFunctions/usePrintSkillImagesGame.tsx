import TechImage from "../components/TechImage";


const usePrintSkillImagesGame = () => {

    interface skillObject{
        name:string,
        image:string
    }

    const skillObjects:skillObject[] =  
    [
        {
            name:"Unity",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
        },
        {
            name:"Feel",
            image:"./feel_01.png"
        },
        {
            name:"Purrnet",
            image:"https://purrnet.dev/_app/immutable/assets/logo.OqKSCF0q.svg"
        },
        {
            name:"Fishnet",
            image:"https://europe1.discourse-cdn.com/unity/original/4X/2/a/b/2abc2f63879d43b0283c33881fcd2709a22584a0.png"
        },
        {
            name:"DOTween",
            image:"https://dotween.demigiant.com/_imgs/logos/dotween_hotweenv2.png"
        },
        {
            name:"Pro Builder",
            image:"./proBuilder.png"
        },
        {
            name:"Blender",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1251px-Blender_logo_no_text.svg.png"
        },
        {
            name:"Ableton",
            image:"https://i.redd.it/3ru0ufljlc021.png"
        },
        {
            name:"Pro Tools",
            image:"./proTools_01.png"
        },
        {
            name:"Github",
            image:"https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"
        },
        {
            name:"HTML",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name:"CSS",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
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
            name:"Javascript",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name:"Typescript",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
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
 
export default usePrintSkillImagesGame;