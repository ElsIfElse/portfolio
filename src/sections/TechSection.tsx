import usePrintSkillImages from "../helperFunctions/usePrintSkillImages";



const TechSection = () => {

    const techCards = usePrintSkillImages();

    return ( 
        <div className="section">
            <div className="flex flex-row justify-start items-start px-10
            w-[100vw]
            sm:w-[640px]
            lg:w-[1000px] md:ml-0
            ">
                <h2>Most commonly used technologies</h2>
            </div>
            <div className="grid place-items-center px-5
            grid-cols-4 gap-2
            sm:w-[640px] sm:grid-cols-5
            md:grid-cols-5
            lg:w-[1000px] lg:grid-cols-7 lg:gap-0
            ">
                {techCards}
            </div>
        </div>
     );
}
 
export default TechSection;