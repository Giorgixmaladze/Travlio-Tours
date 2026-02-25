import { CiLocationOn, CiSun } from "react-icons/ci"
import { TfiStatsUp } from "react-icons/tfi"
import { RiEmotionHappyLine } from "react-icons/ri"
import { useEffect, useRef, useState } from "react"

const stats = [
    { icon: CiLocationOn, target: 584, label: "Top Local Guides" },
    { icon: CiSun, target: 7410, label: "Winter Destinations" },
    { icon: TfiStatsUp, target: 680, label: "New Tours" },
    { icon: RiEmotionHappyLine, target: 2540, label: "Happy Travellers" },
]

const AnimatedNumber = ({ target }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const duration = 1800
                    const step = Math.ceil(target / (duration / 16))
                    const timer = setInterval(() => {
                        setCount((prev) => {
                            const next = prev + step
                            if (next >= target) {
                                clearInterval(timer)
                                return target
                            }
                            return next
                        })
                    }, 16)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return <span ref={ref}>{count.toLocaleString()}</span>
}

const Trending = () => {
    return (
        <div className="flex flex-col items-center py-20 gap-5">
            <div className="flex flex-col items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-500 text-xl italic">Trending Event Of The Week</h3>
                <h2 className="text-gray-800 font-bold text-4xl">Trending Events</h2>
                <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
            </div>

            <div className="w-full bg-orange-500">
                <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map(({ icon: Icon, target, label }) => (
                        <div key={label} className="flex flex-col items-center gap-3 text-white">
                            <Icon className="size-14" />
                            <h3 className="text-4xl font-bold">
                                <AnimatedNumber target={target} />
                            </h3>
                            <p className="text-white/80 text-sm text-center">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending