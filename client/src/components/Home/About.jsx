import { CiLocationOn,CiSun,CiFaceSmile } from "react-icons/ci";
import AboutCard from "../ui/AboutCard";

const About = ()=>{

    return(
        <div className="flex bg-gray-100 pt-7 pb-7 justify-evenly gap-10">
            <AboutCard icon={<CiLocationOn className="text-orange-500 text-[55px]" />} title="1,000+ Local Tours" description="lorem ipsum dolor sit amet"/>
            <AboutCard icon={<CiSun className="text-orange-500 text-[55px]" />} title="Winter Destiations" description="lorem ipsum dolor sit amet"/>
            <AboutCard icon={<CiFaceSmile className="text-orange-500 text-[55px]" />} title="98% Happy Travellers" description="lorem ipsum dolor sit amet"/>
            
        
            {/* <CiLocationOn className="text-orange-500 text-[50px]" /> */}
        </div>
    )
}

export default About
