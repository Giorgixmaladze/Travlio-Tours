const StayingCard = ({ tour }) => {
    return (
        <div className="overflow-hidden rounded-lg" >
            <div className={`bg-cover bg-center w-full h-60 rounded-lg hover:scale-105 transition-all`} style={{ backgroundImage: `url(${tour.image.url})` }}>
                <div className="bg-black/40 w-full h-full pl-5 pb-5 relative rounded-lg">
                    <span className="absolute top-5 right-5 flex flex-col gap-2">
                        {tour.badges.map((badge, index) => (
                            <span key={index} className="font-bold bg-orange-500 text-white px-2 py-1 rounded-full ">{badge}</span>
                        ))}
                    </span>
                    <div className="flex flex-col  justify-end  h-full">
                        <h2 className=" font-bold text-2xl text-white "> {tour.title}</h2>
                        <p className="text-white text-xl">${tour.price.current}/Ticket</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StayingCard