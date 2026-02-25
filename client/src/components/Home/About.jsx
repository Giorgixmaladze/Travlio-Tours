import { CiLocationOn, CiSun, CiFaceSmile } from "react-icons/ci"
import AboutCard from "../ui/AboutCard"

const About = () => {
    return (
        <div className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8">
                <AboutCard
                    icon={<CiLocationOn className="text-orange-500 text-[55px]" />}
                    title="1,000+ Local Tours"
                    description="Handpicked destinations curated by local experts"
                />
                <div className="hidden md:block w-px h-16 bg-gray-200" />
                <AboutCard
                    icon={<CiSun className="text-orange-500 text-[55px]" />}
                    title="Winter Destinations"
                    description="Explore the world's most stunning cold-weather spots"
                />
                <div className="hidden md:block w-px h-16 bg-gray-200" />
                <AboutCard
                    icon={<CiFaceSmile className="text-orange-500 text-[55px]" />}
                    title="98% Happy Travellers"
                    description="Your satisfaction is our highest priority"
                />
            </div>
        </div>
    )
}

export default About
