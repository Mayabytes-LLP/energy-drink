import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { navItems } from "@/components/header"

const items = [
  {
    image: "/assets/images/slider-img-1.png",
  },
  {
    image: "/assets/images/slider-img-2.png",
  },
  {
    image: "/assets/images/slider-img-1.png",
  },
  {
    image: "/assets/images/slider-img-2.png",
  },
  {
    image: "/assets/images/slider-img-1.png",
  },
  {
    image: "/assets/images/slider-img-2.png",
  },
  {
    image: "/assets/images/slider-img-1.png",
  },
  {
    image: "/assets/images/slider-img-2.png",
  },
]
export default function ProductSlider() {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, i) => {
          return (
            <CarouselItem key={i} className="basis-full sm:basis-1/5">
              <Image
                src={item.image}
                alt="sliderImage"
                height={506}
                width={282}
                className={cn("mx-auto drop-shadow-sm", "w-40 sm:w-72")}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
