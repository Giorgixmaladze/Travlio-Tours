
const HomeMain = () => {
    return (
        <div className="bg-[url('/beach.jpg')] min-h-screen bg-center bg-cover bg-no-repeat">
            <div className="w-full min-h-screen bg-gradient-to-b from-black/60 via-black/45 to-black/30 flex justify-center items-center">
                <div className="w-full max-w-5xl px-4 flex flex-col items-center gap-6 py-24 text-center">

                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2 bg-orange-500/90 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                        ✦ &nbsp;Explore The World With Us
                    </span>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl px-2">
                        Ready to Start Your <br className="hidden sm:block" />
                        <span className="text-orange-400">Exciting Journey?</span>
                    </h1>

                    {/* Sub */}
                    <p className="text-gray-200 text-base md:text-xl max-w-xl leading-relaxed px-2">
                        Discover handpicked destinations, expert local guides, and unforgettable experiences across the globe.
                    </p>

                    {/* Search */}
                    <div className="w-full max-w-4xl mt-4 px-2">
                        {/* <SearchForm /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain