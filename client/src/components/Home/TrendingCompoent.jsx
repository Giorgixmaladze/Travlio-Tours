const TrendingComponent = ({ icon, title, description }) => {
    return (
        <div className="flex items-center gap-3 h-full">
            {icon}
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-4xl font-bold">{title}</h2>
                <p className="text-white">{description}</p>
            </div>
        </div>
    )
}

export default TrendingComponent
