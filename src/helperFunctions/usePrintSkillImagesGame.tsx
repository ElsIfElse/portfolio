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