import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ToursMain from "@/components/Tours/ToursMain"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Tours = () => {

    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        gsap.set(".tours-section", { y: 40, opacity: 0 })

        tl.to(".tours-section", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 tours-section">
                <ToursMain />
            </main>
            <Footer />
        </div>
    )
}

export default Tours