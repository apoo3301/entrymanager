import CarouselDemo from "@/components/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, ScanEye, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function HomePage() {
  return (
  //   <div className="flex flex-col min-h-[100dvh]">
  //   <main className="flex-1">
  //     <section className="w-full py-12 md:py-24 lg:py-32">
  //       <div className="container px-4 md:px-6">
  //         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
  //           <div className="flex flex-col justify-center space-y-4">
  //             <div className="space-y-2">
  //               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
  //                 Elevate Your Lifestyle with Our Concierge Service
  //               </h1>
  //               <p className="max-w-[600px] text-muted-foreground md:text-xl">
  //                 Discover a world of personalized assistance, where your every need is anticipated and fulfilled with
  //                 unparalleled care and attention to detail.
  //               </p>
  //             </div>
  //             <div className="flex flex-col gap-2 min-[400px]:flex-row">
  //               <Link
  //                 href="#"
  //                 className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  //                 prefetch={false}
  //               >
  //                 Get Started
  //               </Link>
  //               <Link
  //                 href="/agency/about"
  //                 className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  //                 prefetch={false}
  //               >
  //                 Learn More
  //               </Link>
  //             </div>
  //           </div>
  //           <Image
  //             src="/bg.svg"
  //             width="550"
  //             height="550"
  //             alt="Hero"
  //             className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //     <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  //       <div className="container px-4 md:px-6">
  //         <div className="flex flex-col items-center justify-center space-y-4 text-center">
  //           <div className="space-y-2">
  //             {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div> */}
  //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
  //             Our exclusive accommodations
  //             </h2>
  //             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
  //               Thanks to years of experience, we&apos;ve built a strong trust with our property owners. This allows us to offer exclusive accommodations on <strong>WelkomHOME</strong> that you won&apos;t find anywhere else.
  //             </p>
  //           </div>
  //         </div>
  //         <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
  //           <div className="flex flex-col justify-center space-y-4">
  //             <ul className="grid gap-6">
  //               <li className="flex items-start gap-4">
  //                 <ClockIcon className="h-8 w-8 text-primary" />
  //                 <div>
  //                   <h3 className="text-xl font-bold">Availability</h3>
  //                   <p className="text-muted-foreground">
  //                   Our local teams are available at any time during your stay in all our destinations.
  //                   </p>
  //                 </div>
  //               </li>
  //               <li className="flex items-start gap-4">
  //                 <ConfIcon className="h-8 w-8 text-primary" />
  //                 <div>
  //                   <h3 className="text-xl font-bold">Confidentiality</h3>
  //                   <p className="text-muted-foreground">
  //                   Respect for your privacy is the foundation of our relationship with you.
  //                   </p>
  //                 </div>
  //               </li>
  //               <li className="flex items-start gap-4">
  //                 <WalletIcon className="h-8 w-8 text-primary" />
  //                 <div>
  //                   <h3 className="text-xl font-bold">The best offer</h3>
  //                   <p className="text-muted-foreground">
  //                   We work directly with our owners to ensure you get the fairest prices.
  //                   </p>
  //                 </div>
  //               </li>
  //             </ul>
  //           </div>
  //           <Image
  //             src="/balcon.jpg"
  //             width="550"
  //             height="310"
  //             alt="Features"
  //             className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //     <CarouselDemo />
  //     <section className="w-full py-12 md:py-24 lg:py-32">
  //       <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
  //         <div className="space-y-3">
  //           <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">They trusted us...</div>
  //           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
  //           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
  //             Hear from our satisfied clients about the exceptional service and attention to detail they&apos;ve
  //             experienced.
  //           </p>
  //         </div>
  //         <div className="divide-y rounded-lg border">
  //           <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
  //             <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
  //               <Image
  //                 src="/icon.png"
  //                 width="64"
  //                 height="64"
  //                 alt="Avatar"
  //                 className="rounded-full"
  //                 style={{ aspectRatio: "64/64", objectFit: "cover" }}
  //               />
  //               <div className="text-center">
  //                 <h4 className="text-lg font-semibold">Francois, Paris, France</h4>
  //                 <p className="text-sm text-muted-foreground">Villa Naiades</p>
  //               </div>
  //               <p className="text-sm text-muted-foreground">
  //               &quot;Logement conforme à l&apos;annonce beaucoup d&apos;équipements pour la cuisine, il suffit de poser vos valises et de vous régaler avec la vue magnifique, merci à l&apos;hôte pour sa gentillesse, nous recommandons ce logement au top 👍&quot;
  //               </p>
  //             </div>
  //             <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
  //               <Image
  //                 src="/icon.png"
  //                 width="64"
  //                 height="64"
  //                 alt="Avatar"
  //                 className="rounded-full"
  //                 style={{ aspectRatio: "64/64", objectFit: "cover" }}
  //               />
  //               <div className="text-center">
  //                 <h4 className="text-lg font-semibold">Ernst, Erlangen, Allemagne</h4>
  //                 <p className="text-sm text-muted-foreground">Villa Tumulus</p>
  //               </div>
  //               <p className="text-sm text-muted-foreground">
  //               &quot;Spacious villa with exceptionell view in a calm neighborhood. Great amenties!&quot;
  //               </p>
  //             </div>
  //             <div className="mx-auto flex w-full flex-col items-center justify-center p-4 sm:p-8 space-y-4">
  //               <Image
  //                 src="/icon.png"
  //                 width="64"
  //                 height="64"
  //                 alt="Avatar"
  //                 className="rounded-full"
  //                 style={{ aspectRatio: "64/64", objectFit: "cover" }}
  //               />
  //               <div className="text-center">
  //                 <h4 className="text-lg font-semibold">Jordan, Le Raincy, France</h4>
  //                 <p className="text-sm text-muted-foreground">Villa Les Tourterelles</p>
  //               </div>
  //               <p className="text-sm text-muted-foreground">
  //               &quot;Shirley et Yoan ont été disponibles et très réactifs à chaques demandes. Ils sont de plus très sympathique et accueillants. Les prestations sont à la hauteur et la propreté était irréprochable dans le logement. Nous vous les conseillons les yeux fermés. Nous referons appel à eux pour nos prochaines vacances dans le sud!&quot;
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </main>
  // </div>
      <div>
          <main>
          <div className="relative p-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/bg.svg"
                alt="Scenic View"
                className="w-full h-[600px] object-cover"
                width="1200"
                height="600"
                style={{ aspectRatio: "1200/600", objectFit: "cover" }}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="font-thin">WELKOM</span>
                <span className="font-bold"> HOME.</span>
              </div>
            </div>
          </div>
        {/* <div className="p-8 text-center">
          <p className="text-lg">
            Venez découvrir la Côte d'Azur différemment
            <br />
            contactez nous au <span className="text-[#ffb800]">+33 668 192 755</span>
          </p>
          <h2 className="mt-8 text-3xl font-bold">Nos logements en exclusivité</h2>
        </div> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tailored Experiences, Effortless Luxury.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our concierge service is designed to elevate your lifestyle with personalized recommendations, make your stay unforgettable...
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-200 ease-in-out">
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                  <h3 className="text-lg font-bold">24/7 Availability</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our local teams are available at any time during your stay in all our destinations.
                </p>
              </div>
            </div>
              <div className="grid gap-1">
                <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-200 ease-in-out">
                  <div className="flex items-center space-x-2">
                    <ScanEye className="h-6 w-6 text-muted-foreground" />
                    <h3 className="text-lg font-bold">Confidentiality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Respect for your privacy is the foundation of our relationship with you.
                    </p>
                  </div>
              </div>
              <div className="grid gap-1">
              <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-200 ease-in-out">
                <div className="flex items-center space-x-2">
                  <Wallet className="h-6 w-6 text-muted-foreground" />
                <h3 className="text-lg font-bold">The best offer</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                We work directly with our owners to ensure you get the fairest prices.
                </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/agency/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
              <Link
                href="/agency/about"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden">
              <Carousel className="rounded-lg overflow-hidden">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/bahia.jpg"
                      alt="Carousel Image 1"
                      width={800}
                      height={450}
                      className="object-cover aspect-video"
                    />
                    <div className="bg-background/80 px-4 py-2 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Villa Bahia, Les Issambres, France</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/grimaud.jpg"
                      alt="Carousel Image 2"
                      width={800}
                      height={450}
                      className="object-cover aspect-video"
                    />
                    <div className="bg-background/80 px-4 py-2 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Grimaud, France</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/nanzer.jpg"
                      alt="Carousel Image 3"
                      width={800}
                      height={450}
                      className="object-cover aspect-video"
                    />
                    <div className="bg-background/80 px-4 py-2 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Les Issambres, France</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/lallemand.jpg"
                      alt="Carousel Image 4"
                      width={800}
                      height={450}
                      className="object-cover aspect-video"
                    />
                    <div className="bg-background/80 px-4 py-2 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Les Issambres, France</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/besson.jpg"
                      alt="Carousel Image 5"
                      width={800}
                      height={450}
                      className="object-cover aspect-video"
                    />
                    <div className="bg-background/80 px-4 py-2 text-center">
                      <p className="text-sm font-medium text-muted-foreground">Les Issambres, France</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <ChevronLeftIcon className="w-6 h-6" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                  <ChevronRightIcon className="w-6 h-6" />
                </CarouselNext>
              </Carousel>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Our exclusive accommodations.
                </h2>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                  Thanks to years of experience, we have built a real relationship of trust with our owners. 
                  This allows us to open the doors of houses that we offer exclusively on <strong>Welkom Home</strong> 
                  and which you will not find for rent anywhere else.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agency/our-guests">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Discover the accommodation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
            <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start rounded-lg bg-background p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Jordan, Le Raincy, France</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &quot;Shirley et Yoan ont été disponibles et très réactifs à chaques demandes. Ils sont de plus très sympathique et accueillants. Les prestations sont à la hauteur et la propreté était irréprochable dans le logement. Nous vous les conseillons les yeux fermés. Nous referons appel à eux pour nos prochaines vacances dans le sud!&quot;
                </blockquote>
              </div>
              <div className="flex flex-col items-start rounded-lg bg-background p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Simon, Paris</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &quot;Merci à Yohan et Shirley pour leur écoute et leur accompagnement, nous avons passés un magnifique moment au Mas Yuralla.&quot;
                </blockquote>
              </div>
              <div className="flex flex-col items-start rounded-lg bg-background p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>EE</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">Ernst, Erlangen, Allemagne</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &quot;Spacious villa with exceptionell view in a calm neighborhood. Great amenties!&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="image"
                src="/sttropez.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Join Us
              </h2>

              <p className="mt-4 text-gray-600">
              Do you want to rent your villa?
              We would love to know more.
              </p>

              <a
                href="/agency/join-us"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Offer your accommodation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      </main>
    </div>
  );
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}