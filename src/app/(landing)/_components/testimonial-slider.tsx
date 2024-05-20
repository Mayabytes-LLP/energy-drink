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
    image: "/assets/images/testimonial-1.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
  {
    image: "/assets/images/testimonial-2.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
  {
    image: "/assets/images/testimonial-1.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
  {
    image: "/assets/images/testimonial-2.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
  {
    image: "/assets/images/testimonial-1.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
  {
    image: "/assets/images/testimonial-2.png",
    review:
      "It’s only been 2 weeks but already have lost weight and feeling better already. The staff is very friendly and helpful. They are quick and efficient and in and out pretty quickly. Estelle was my medical assistant today.",
    designation: "Jamie R., NY",
  },
]
export default function TestimonialSlider() {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, i) => {
          return (
            <CarouselItem key={i} className="basis-1/2">
              <div
                className={cn(
                  "bg-blur-oval bg-contain bg-no-repeat",
                  "flex items-center",
                  "w-full  overflow-hidden"
                )}
              >
                <div className="w-2/5">
                  <Image
                    src={item.image}
                    alt="sliderImage"
                    height={340}
                    width={340}
                    className=""
                  />
                </div>
                <div className={cn("w-3/5")}>
                  <div className="w-">
                    <p className="mb-5 w-96 text-2xl font-medium">
                      {item.review}
                    </p>
                    <h6 className="text-3xl font-semibold">
                      {item.designation}
                    </h6>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
