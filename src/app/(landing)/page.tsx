import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

import DrinkQuality from "./_components/drink-quality"
import EnergyDrinks from "./_components/energy-drink"
import Hero from "./_components/hero"
import ProductSlider from "./_components/product-slider"
import TestimonialSlider from "./_components/testimonial-slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <EnergyDrinks />
      <DrinkQuality />
      <div className={cn("w-full", "relative")}>
        <div
          className={cn(
            "rounded-full border border-transparent sm:border-white",
            "flex w-full items-center",
            "px-10",
            "mb-10 sm:mb-12",
            "mx-auto w-11/12"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between",
              "w-3/12",
              "hidden md:flex"
            )}
          >
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
              className="w-20 lg:w-44"
            />
            <Image
              src="/assets/images/can.png"
              alt="pattern2"
              height={57}
              width={34}
              className="w-5 lg:w-9"
            />
          </div>
          <div
            className={cn(
              "mx-auto w-fit",
              "rounded-full border border-white text-center",
              "px-12 py-2"
            )}
          >
            <h5
              className={cn(
                "font-serif capitalize",
                "text-md sm:text-2xl 2xl:text-4xl"
              )}
            >
              want to try boost drink
            </h5>
          </div>
          <div
            className={cn(
              "flex items-center justify-between",
              "w-3/12",
              "hidden md:flex"
            )}
          >
            <Image
              src="/assets/images/can.png"
              alt="pattern2"
              height={57}
              width={34}
              className="w-5 lg:w-9"
            />
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
              className="w-20 lg:w-44"
            />
          </div>
        </div>
        <div className={cn("container")}>
          <h2
            className={cn(
              "mx-auto w-full sm:w-3/4",
              "text-center font-bold uppercase leading-[100%] tracking-tighter",
              "text-3xl md:text-4xl lg:text-7xl 2xl:text-9xl",
              "relative z-10",
              "mb-0 lg:mb-10"
            )}
          >
            order your favorite drinks
          </h2>
        </div>
        <div
          className={cn(
            "-mt-16 lg:-mt-40",
            "bg-slider bg-cover bg-bottom bg-no-repeat",
            "pt-32 md:pt-60"
          )}
        >
          <ProductSlider />
          <Image
            src="/assets/images/support.png"
            height={247}
            width={533}
            alt="base"
            className={cn("mx-auto -mt-6 md:-mt-20", "w-40 md:w-96")}
          />
        </div>
        <div
          className={cn(
            "mx-auto w-3/4 sm:w-1/2 xl:w-1/4",
            "text-center",
            "-mt-8 md:-mt-20 xl:-mt-28",
            "relative z-10"
          )}
        >
          <h4
            className={cn(
              "font-heading font-semibold uppercase",
              "text-xl md:text-3xl lg:text-4xl",
              "mb-0 lg:mb-5"
            )}
          >
            energy drink
          </h4>
          <p
            className={cn(
              "font-medium",
              "text-md md:text-lg xl:text-2xl",
              "mb-5 lg:mb-10"
            )}
          >
            Lorem ipsum dolor sit amet consectetur. Sodales at felis pulvinar
            aenean.
          </p>
          <Button asChild variant="default" className={cn("p-0")}>
            <Link href="#founder">try it now</Link>
          </Button>
        </div>
        <Image
          src="/assets/images/blur.png"
          alt="blur"
          height={278}
          width={1920}
          className={cn(
            "absolute left-0 right-0 w-full",
            "bottom-10 md:bottom-0 lg:bottom-10"
          )}
        />
      </div>
      <div className="relative w-full py-16">
        <div
          className={cn(
            "rounded-full border border-transparent sm:border-white",
            "flex w-full items-center",
            "px-10",
            "mb-12",
            "mx-auto w-11/12"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between",
              "w-3/12",
              "hidden md:flex"
            )}
          >
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
              className="w-20 lg:w-44"
            />
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={43}
              width={87}
              className="w-10 lg:w-20"
            />
          </div>
          <div
            className={cn(
              "mx-auto w-fit",
              "rounded-full border border-white text-center",
              "px-12 py-2"
            )}
          >
            <h5
              className={cn(
                "font-serif capitalize",
                "text-md sm:text-2xl 2xl:text-4xl"
              )}
            >
              customer liked our drinks
            </h5>
          </div>
          <div
            className={cn(
              "flex items-center justify-between",
              "w-3/12",
              "hidden md:flex"
            )}
          >
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={43}
              width={87}
              className="w-10 lg:w-20"
            />
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
              className="w-20 lg:w-44"
            />
          </div>
        </div>
        <div className={cn("w-full px-5 lg:px-0", "py-0 md:py-16")}>
          <TestimonialSlider />
        </div>
      </div>
      <Footer />
    </main>
  )
}
