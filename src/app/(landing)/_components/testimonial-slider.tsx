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
            <CarouselItem key={i} className="basis-full lg:basis-1/2">
              <div
                className={cn(
                  "bg-blur-oval bg-contain bg-no-repeat",
                  "flex items-center",
                  "w-full overflow-hidden"
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
                  <div
                    className={cn(
                      "w-72 md:w-96 lg:w-64 xl:w-80 2xl:w-96",
                      "ml-3"
                    )}
                  >
                    <p
                      className={cn(
                        "font-medium",
                        "xl:text-md text-md lg:text-sm 2xl:text-xl",
                        "mb-2 xl:mb-5"
                      )}
                    >
                      {item.review}
                    </p>
                    <h6
                      className={cn(
                        "font-semibold",
                        "text-xl xl:text-2xl 2xl:text-3xl"
                      )}
                    >
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
