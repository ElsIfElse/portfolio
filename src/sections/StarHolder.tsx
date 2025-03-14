import FallingStar from "../components/FallingStar";
import Star from "../components/Star";

const StarHolder = () => {
    return ( 
        <div className="fixed w-full h-full z-[5]">
            <Star style={1} duration={5} x="100px" y="50px"/>
            <Star style={2} duration={7} x="300px" y="200px"/>
            <Star style={3} duration={10} x="600px" y="120px"/>
            <Star style={1} duration={12} x="780px" y="320px"/>
            <Star style={2} duration={6} x="1100px" y="200px"/>
            <Star style={3} duration={7} x="1500px" y="500px"/>
            <Star style={5} duration={7} x="1700px" y="870px"/>
            <Star style={5} duration={8} x="1860px" y="130px"/>
            <Star style={4} duration={9} x="2100px" y="450px"/>
            <Star style={4} duration={11} x="1270px" y="800px"/>
            <Star style={2} duration={6} x="400px" y="1000px"/>
            <Star style={3} duration={8} x="500px" y="600px"/>
            <Star style={1} duration={9} x="2100px" y="450px"/>
            <Star style={2} duration={10} x="1800px" y="800px"/>
            <Star style={3} duration={10} x="1670px" y="1050px"/>
            <Star style={4} duration={7} x="1870px" y="1200px"/>
            <Star style={4} duration={7} x="175px" y="1200px"/>
            <FallingStar duration={7}/>
        </div>
     );
}
 
export default StarHolder;