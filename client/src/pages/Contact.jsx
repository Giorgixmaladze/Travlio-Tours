import Header from "../components/Header"
import Footer from "../components/Footer"
import { ContactInfo, ContactForm } from "../components/Contact/ContactSections"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const ContactHero = () => (
    <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center contact-hero"
        style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
    >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg contact-hero-text">Contact Us</h1>
            <p className="mt-3 text-sm md:text-base text-gray-300 uppercase tracking-widest contact-hero-text">
                Home &nbsp;/&nbsp;
                <span className="text-orange-400 font-semibold">Contact</span>
            </p>
        </div>
    </div>
)


const Contact = () => {

    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        gsap.set(".contact-hero", { opacity: 0 })
        gsap.set(".contact-hero-text", { y: 20, opacity: 0 })
        gsap.set(".contact-section", { y: 30, opacity: 0 })

        tl.to(".contact-hero", {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })
            .to(".contact-hero-text", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4")
            .to(".contact-section", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.2")

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-50">
                <ContactHero />
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="contact-section">
                        <ContactInfo />
                    </div>
                    <div className="contact-section mt-12">
                        <ContactForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact
