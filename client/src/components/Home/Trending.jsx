import { CiLocationOn } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import StayingComponent from "./StayingComponent";
import { TfiStatsUp } from "react-icons/tfi";
import { RiEmotionHappyLine } from "react-icons/ri";

const Trending = () => {
    return (
        <div className="flex flex-col items-center pt-25 gap-5">
            <div className="flex flex-col items-center gap-5">
                <h3 className="font-medium  text-gray-600  text-2xl"><i>Trending Event Of The Week</i></h3>
                <h2 className="text-gray-800 font-bold text-5xl"> Trending Event</h2>
            </div>
            <div className="pt-15 w-full">
                <div className="w-full bg-[#ff5722] h-50 flex items-center justify-evenly">
                    <StayingComponent icon={<CiLocationOn className="size-15 text-white" />} title="584" description="Top Local Guide" />
                    <StayingComponent icon={<CiSun className="size-15 text-white" />} title="7,410" description="Winter Destinations" />
                    <StayingComponent icon={<TfiStatsUp className="size-15 text-white" />} title="680" description="New Tours" />
                    <StayingComponent icon={<RiEmotionHappyLine className="size-15 text-white" />} title="2,540" description="Happy Travellers" />
                </div>
            </div>
        </div>
    )
}

export default Trending