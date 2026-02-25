import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutHero from "../components/About/AboutHero"
import AboutStats from "../components/About/AboutStats"
import AboutMission from "../components/About/AboutMission"
import AboutTeam from "../components/About/AboutTeam"

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <AboutHero />
                <AboutStats />
                <AboutMission />
                <AboutTeam />
            </main>
            <Footer />
        </div>
    )
}

export default About
