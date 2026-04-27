import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import { useContext } from "react"
import { MessageContext } from "../../context/MessageContext.jsx"

const contactInfo = [
    {
        icon: FaMapMarkerAlt,
        title: "Our Location",
        lines: ["123 Travel Street", "Wanderlust City, WC 45678"],
    },
    {
        icon: FaPhone,
        title: "Phone Number",
        lines: ["+1 234 567 890", "+1 987 654 321"],
    },
    {
        icon: FaEnvelope,
        title: "Email Address",
        lines: ["hello@travlio.com", "support@travlio.com"],
    },
    {
        icon: FaClock,
        title: "Working Hours",
        lines: ["Mon – Fri: 9am – 6pm", "Sat – Sun: 10am – 4pm"],
    },
]

const ContactInfo = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {contactInfo.map(({ icon: Icon, title, lines }) => (
            <div
                key={title}
                className="bg-white rounded-md shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow duration-200"
            >
                <span className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
                    <Icon className="text-orange-500 text-xl" />
                </span>
                <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                {lines.map((l) => (
                    <p key={l} className="text-gray-500 text-xs leading-relaxed">{l}</p>
                ))}
            </div>
        ))}
    </div>
)

const ContactForm = () => {
    const { sendMessage } = useContext(MessageContext)
    const formData = {
        name: "",
        email: "",
        message: ""
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        formData[name] = value
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await sendMessage(formData)
        e.target.reset()
    }

    return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Form */}
        <div className="w-full">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Send Us a Message</h2>
            <div className="w-12 h-1 bg-orange-500 rounded mb-6" />

            <form onSubmit={handleOnSubmit} onChange={handleOnChange} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Subject</label>
                    <input
                        type="text"
                        placeholder="How can we help?"
                        className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Tell us about your travel plans..."
                        className="border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-8 py-3 rounded transition-colors duration-200 self-start mt-2"
                >
                    Send Message →
                </button>
            </form>
        </div>

        {/* Map */}
        <div className="w-full rounded-md overflow-hidden shadow-sm border border-gray-100" style={{ minHeight: "360px" }}>
            <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784368459325!3d40.74844154330146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5c93!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1614962762944!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    </div>
    )
}

export { ContactInfo, ContactForm }
