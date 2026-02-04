import Header from "../components/Header"
import HomeMain from "../components/Home/Home-main"
import Staying from "../components/Home/Staying"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import Tours from "../components/Home/Tours"
const Home = () =>{
    return (
        <div>
            <Header/>
            <HomeMain/>
            <About/>
            <Travel/>
            <Tours/>
            <Staying/>
        </div>
    )
}
export default Home