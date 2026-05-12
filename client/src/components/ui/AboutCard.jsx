const AboutCard = ({icon, title, description})=>{
    return(
        <div className="flex items-center gap-4">
            {icon}
            <span className="flex flex-col">
                <h2 className="text-[20px] font-semibold text-gray-800">{title}</h2>
                <p className=" font-light text-gray-600">{description}</p>
            </span>
        </div>
    )
}

export default AboutCard