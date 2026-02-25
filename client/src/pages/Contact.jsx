import Header from "../components/Header"
import Footer from "../components/Footer"
import { ContactInfo, ContactForm } from "../components/Contact/ContactSections"

const ContactHero = () => (
    <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
    >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">Contact Us</h1>
            <p className="mt-3 text-sm md:text-base text-gray-300 uppercase tracking-widest">
                Home &nbsp;/&nbsp;
                <span className="text-orange-400 font-semibold">Contact</span>
            </p>
        </div>
    </div>
)

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-50">
                <ContactHero />
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact
