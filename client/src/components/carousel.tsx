import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"

export default function CarouselDemo() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-40">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Make your stay unforgettable...</h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our concierge service is proud to partner with some of the most respected brands in the industry, ensuring
            the highest level of service and quality.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
        <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/bahia.jpg"
              alt="Nature Image 1"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/besson.jpg"
              alt="Nature Image 2"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/grimaud.jpg"
              alt="Nature Image 3"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/jsp.jpg"
              alt="Nature Image 4"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/jsp2.jpg"
              alt="Nature Image 5"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/lallemand.jpg"
              alt="Nature Image 5"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/nanzer.jpg"
              alt="Nature Image 5"
              width="800"
              height="400"
              className="object-cover w-full aspect-[2/1]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button variant="ghost" size="icon">
            <ChevronLeftIcon className="w-6 h-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button variant="ghost" size="icon">
            <ChevronRightIcon className="w-6 h-6" />
            <span className="sr-only">Next</span>
          </Button>
        </CarouselNext>
      </Carousel>
        </div>
      </div>
    </section>
  )
}
