import Header from "../components/Header"
import HomeMain from "../components/Home/Home-main"
import Staying from "../components/Home/Staying"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import Tours from "../components/Home/Tours"
import Trending from "../components/Home/Trending"
import Reviews from "../components/Home/Reviews"

const Home = () =>{
    return (
        <div>
            <Header/>
            <HomeMain/>
            <About/>
            <Travel/>
            <Tours/>
            <Staying/>
            <Trending/>
            <Reviews/>
        </div>
    )
}
export default Home