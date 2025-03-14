import usePrintSkillImages from "../helperFunctions/usePrintSkillImages";



const TechSection = () => {

    const techCards = usePrintSkillImages();

    return ( 
        <div className="section">
            <div className="flex flex-row justify-start items-start w-[1000px] px-10">
                <h2>Most commonly used technologies</h2>
            </div>
            <div className="w-[1000px] grid grid-cols-7 place-items-center px-5">
                {techCards}
            </div>
        </div>
     );
}
 
export default TechSection;