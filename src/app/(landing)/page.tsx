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
      <div className={cn("w-full", "py-16", "relative")}>
        <div
          className={cn(
            "rounded-full border border-white",
            "flex w-full items-center",
            "px-10",
            "mb-12",
            "mx-auto w-11/12"
          )}
        >
          <div className={cn("flex items-center justify-between", "w-3/12")}>
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
            />
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={57}
              width={34}
            />
          </div>
          <div
            className={cn(
              "mx-auto w-fit",
              "rounded-full border border-white text-center",
              "px-12 py-2"
            )}
          >
            <h5 className="font-serif text-4xl capitalize">
              want to try boost drink
            </h5>
          </div>
          <div className={cn("flex items-center justify-between", "w-3/12")}>
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={57}
              width={34}
            />
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
            />
          </div>
        </div>
        <div className={cn("container")}>
          <h2
            className={cn(
              "mx-auto mb-10 w-3/4",
              "text-center font-bold uppercase leading-[100%] tracking-tighter",
              "text-9xl",
              "relative z-10"
            )}
          >
            order your favorite drinks
          </h2>
        </div>
        <div
          className={cn(
            "-mt-40",
            "bg-slider bg-cover bg-bottom bg-no-repeat",
            "pt-60"
          )}
        >
          <ProductSlider />
          <Image
            src="/assets/images/support.png"
            height={247}
            width={533}
            alt="base"
            className="mx-auto -mt-20"
          />
        </div>
        <div
          className={cn(
            "mx-auto w-1/4",
            "text-center",
            "-mt-28",
            "relative z-10"
          )}
        >
          <h4
            className={cn(
              "font-heading font-semibold uppercase",
              "text-4xl",
              "mb-5"
            )}
          >
            energy drink
          </h4>
          <p className="mb-10 text-2xl font-medium">
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
          className="absolute bottom-10 left-0 right-0 w-full"
        />
      </div>
      <div className="relative w-full py-16">
        <div
          className={cn(
            "rounded-full border border-white",
            "flex w-full items-center",
            "px-10",
            "mb-12",
            "mx-auto w-11/12"
          )}
        >
          <div className={cn("flex items-center justify-between", "w-3/12")}>
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
            />
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={43}
              width={87}
            />
          </div>
          <div
            className={cn(
              "mx-auto w-fit",
              "rounded-full border border-white text-center",
              "px-12 py-2"
            )}
          >
            <h5 className="font-serif text-4xl capitalize">
              customer liked our drinks
            </h5>
          </div>
          <div className={cn("flex items-center justify-between", "w-3/12")}>
            <Image
              src="/assets/images/smiley.png"
              alt="pattern2"
              height={43}
              width={87}
            />
            <Image
              src="/assets/images/dashed.png"
              alt="pattern1"
              height={23}
              width={176}
            />
          </div>
        </div>
        <div className="w-full py-16">
          <TestimonialSlider />
        </div>
      </div>
      <Footer />
    </main>
  )
}
