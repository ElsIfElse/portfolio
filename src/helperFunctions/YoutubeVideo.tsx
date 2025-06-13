import YouTube from "react-youtube";

interface YoutubeVideoProps {
    link:string | undefined
}


const YoutubeVideo:React.FC<YoutubeVideoProps> = ({link}) => {


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      }; 

    return ( 
        <YouTube videoId={link} opts={opts} />
     );
}
 
export default YoutubeVideo;