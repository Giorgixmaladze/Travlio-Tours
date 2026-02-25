import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const SocialIcon = ({ platform, href }) => {
    const icons = {
        instagram: FaInstagram,
        linkedin: FaLinkedin,
        twitter: FaTwitter,
    }
    const Icon = icons[platform]
    if (!Icon) return null
    return (
        <a
            href={href || "#"}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-200"
        >
            <Icon className="text-sm" />
        </a>
    )
}

const TeamCard = ({ item }) => {
    return (
        <div className="group relative overflow-hidden rounded-md shadow-md cursor-pointer">
            {/* Photo */}
            <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Always-visible bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3">
                <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                <p className="text-orange-500 text-xs">{item.role}</p>
            </div>

            {/* Hover overlay with bio + social */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <h4 className="text-white font-bold text-base text-center">{item.name}</h4>
                <p className="text-orange-400 text-xs font-semibold">{item.role}</p>
                <p className="text-gray-300 text-xs text-center leading-relaxed">{item.specialty}</p>
                <div className="flex gap-2 mt-2">
                    {item.social &&
                        Object.entries(item.social)
                            .filter(([, val]) => val)
                            .map(([platform, href]) => (
                                <SocialIcon key={platform} platform={platform} href={href} />
                            ))}
                </div>
            </div>
        </div>
    )
}

export default TeamCard