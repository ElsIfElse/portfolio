interface BackgroundTileProps{
    x:number
    y:number
    color:string
}

const BackgroundTile:React.FC<BackgroundTileProps> = ({color}) => {
    return ( 
        <div style={{backgroundColor:`${color}`}} className="background-tile"></div>
     );
}

export default BackgroundTile;