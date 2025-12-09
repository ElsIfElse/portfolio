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
            image:"https://assetstorev1-prd-cdn.unity3d.com/key-image/173c8845-1063-44dc-aa55-65738aa93cce.jpg"
        },
        {
            name:"Purrnet",
            image:"https://purrnet.dev/_app/immutable/assets/logo.OqKSCF0q.svg"
        },
        {
            name:"Fishnet",
            image:"https://assetstorev1-prd-cdn.unity3d.com/key-image/1f7d1578-9a1e-4664-b78c-7b1953e92b6e.jpg"
        },
        {
            name:"DOTween",
            image:"https://dotween.demigiant.com/_imgs/logos/dotween_hotweenv2.png"
        },
        {
            name:"Pro Builder",
            image:"https://pbs.twimg.com/media/DUfUIQ8V4AAn7EL.png"
        },
        {
            name:"Blender",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1251px-Blender_logo_no_text.svg.png"
        },
        {
            name:"Ableton Live",
            image:"https://i.redd.it/3ru0ufljlc021.png"
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