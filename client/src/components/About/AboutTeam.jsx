import { useContext, useEffect } from "react"
import { StaffContext } from "@/context/StaffContext"
import CarouselComp from "../CarouselComp"
import TeamCard from "./TeamCard"

const AboutTeam = () => {
    const { staff, getAllStaff } = useContext(StaffContext)

    useEffect(() => {
        getAllStaff()
    }, [])

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-12">
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">
                        Our People
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
                    <div className="w-16 h-1 bg-orange-500 rounded mx-auto mt-3" />
                </div>

                {/* Carousel */}
                <div className="px-10">
                    {staff.length > 0 ? (
                        <CarouselComp
                            iterable={staff}
                            renderItem={(item) => <TeamCard item={item} />}
                        />
                    ) : (
                        <p className="text-center text-gray-400 text-sm">Loading team...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutTeam
