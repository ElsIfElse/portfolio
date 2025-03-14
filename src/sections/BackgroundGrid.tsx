import BackgroundTile from "../components/BackgroundTile";
import {motion} from "framer-motion"

const BackgroundGrid = () => {

    const createGrid = function(gridSize:number,bgColor:string):React.JSX.Element[] {

        const x:number = gridSize;
        const y:number = gridSize

        const grid:React.JSX.Element[] = []

        for(let i = 0; i < x; i++){
            for(let j = 0; j < y; j++){
                grid.push(<BackgroundTile color={bgColor} x={i} y={j}/>);
            }
        }
        console.log(grid);

        return(  
                grid.map((tile,index)=>(
                    <div key={index}>
                        {tile}
                    </div>
                )) 
        )
    }

    return (

        <div className="h-full z-[-10] fixed flex flex-col items-center">

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.3,0,0.2],
                transition:{
                    times:[0,0.2,0.4,0.6,1],
                    duration:5,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[20%] translate-x-[13.3%] opacity-20">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.2,0,0.2],
                transition:{
                    times:[0,0.2,0.3,0.5,1],
                    duration:6,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[20%] translate-x-[-13.3%] opacity-20">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.2,0,0.2],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:8,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[20%] translate-x-[26.6%] opacity-20">  
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.2,0,0.2],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:9,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[20%] translate-x-[-26.6%] opacity-20">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.2,0,0.2],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:6,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[0%] translate-x-[26.6%] opacity-20">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.2,0.1,0.2,0,0.2],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:9,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[0%] translate-x-[-26.6%] opacity-20">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.15,0.1,0.15,0,0.15],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:6.5,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[60%] translate-x-[53.2%] opacity-15">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>

            <motion.div 
            animate={{
                opacity:[0.15,0.1,0.15,0,0.15],
                transition:{
                    times:[0,0.2,0.4,0.5,1],
                    duration:7,
                    repeat:Infinity,
                }
            }}
            className="w-[1200px] h-[1000px] grid grid-cols-30 z-[-10] rounded-full overflow-hidden fixed translate-y-[60%] translate-x-[-53.2%] opacity-15">
                {/* {createGrid(30,"#0a0a0a")} */}
                {createGrid(30,"transparent")}
            </motion.div>
        </div>


     );
}
 
export default BackgroundGrid;