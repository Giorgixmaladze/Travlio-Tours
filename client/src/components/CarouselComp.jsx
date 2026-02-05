import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const CarouselComp = ({iterable,renderItem}) => {
    return (
        <Carousel className="w-full ">
            <CarouselContent >
                {iterable.map((item) => (
                    <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
                        {renderItem(item)}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComp
