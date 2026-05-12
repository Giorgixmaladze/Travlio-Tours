import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutHero from "../components/About/AboutHero"
import AboutStats from "../components/About/AboutStats"
import AboutMission from "../components/About/AboutMission"
import AboutTeam from "../components/About/AboutTeam"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const About = () => {

    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        gsap.set(".about-section", { y: 40, opacity: 0 })

        tl.to(".about-section", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="about-section">
                    <AboutHero />
                </div>
                <div className="about-section">
                    <AboutStats />
                </div>
                <div className="about-section">
                    <AboutMission />
                </div>
                <div className="about-section">
                    <AboutTeam />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About
