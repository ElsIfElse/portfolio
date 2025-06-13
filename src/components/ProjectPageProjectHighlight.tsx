import YoutubeVideo from "../helperFunctions/YoutubeVideo";

interface HighlightProps{
    highlightLink:string | undefined
    highlightImage_01:string | undefined
    highlightImage_02:string | undefined
    highlightDescription:string
}

const ProjectPageProjectHighlight:React.FC<HighlightProps> = ({highlightLink,highlightImage_01,highlightImage_02,highlightDescription}) => {

    const onImageClick = function(e:React.MouseEvent<HTMLImageElement>){
            const image = e.target as HTMLImageElement;
            image.classList.toggle("scale-120")
        }

        return ( 
        <div className="max-w-[640px] flex flex-col items-center gap-6 z-30">
            <div className="w-full flex flex-row items-center justify-start pt-12 pb-2">
                <h2>Project Highlight</h2>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="whitespace-break-spaces">{highlightDescription}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-12">
                <div className="w-[640px] flex flex-col items-center gap-6 justify-center">
                    {highlightImage_02 ? <img onClick={(e: React.MouseEvent<HTMLImageElement>) => onImageClick(e)} className="w-[640px] transition-all duration-300 hover:cursor-pointer" src={highlightImage_02} alt="" /> : null}    
                    {highlightImage_01 ? <img onClick={(e: React.MouseEvent<HTMLImageElement>) => onImageClick(e)} className="w-[640px] transition-all duration-300 hover:cursor-pointer" src={highlightImage_01} alt="" /> : null}
                </div>
                
                {highlightLink ? <YoutubeVideo link={highlightLink}/> : null}

            </div>
        </div>
     );
}
 
export default ProjectPageProjectHighlight;