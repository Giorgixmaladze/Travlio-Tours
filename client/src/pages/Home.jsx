import Header from "../components/Header"
import HomeMain from "../components/Home/Home-main"
import Staying from "../components/Home/Staying"
import About from "../components/Home/About"
import Travel from "../components/Home/Travel"
import Tours from "../components/Home/Tours"
import Trending from "../components/Home/Trending"
import Reviews from "../components/Home/Reviews"
import Footer from "../components/Footer"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Home = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        gsap.set(".home-section", { y: 40, opacity: 0 })

        tl.to(".home-section", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef}>
            <Header />
            <div className="home-section">
                <HomeMain />
            </div>
            <div className="home-section">
                <About />
            </div>
            <div className="home-section">
                <Travel />
            </div>
            <div className="home-section">
                <Tours />
            </div>
            <div className="home-section">
                <Staying />
            </div>
            <div className="home-section">
                <Trending />
            </div>
            <div className="home-section">
                <Reviews />
            </div>
            <Footer />
        </div>
    )
}
export default Home