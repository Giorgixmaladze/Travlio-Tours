const AboutHero = () => {
    return (
        <div
            className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                    About Us
                </h1>
                <p className="mt-3 text-sm md:text-base text-gray-300 uppercase tracking-widest">
                    Home &nbsp;/&nbsp;
                    <span className="text-orange-400 font-semibold">About</span>
                </p>
            </div>
        </div>
    )
}

export default AboutHero
