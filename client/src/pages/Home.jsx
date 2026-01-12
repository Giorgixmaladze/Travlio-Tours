import Header from "../components/Header"
import HomeMain from "../components/Home/Home-main"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
const Home = () =>{
    return (
        <div>
            <Header/>
            <HomeMain/>
            <About/>
            <Travel/>
        </div>
    )
}
export default Home