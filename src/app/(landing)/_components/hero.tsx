import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className={cn(
        "w-full",
        "bg-hero bg-cover bg-center bg-no-repeat",
        "px-5 pt-32",
        "pb-10 lg:pb-0"
      )}
    >
      <div className={cn("container")}>
        <div className={cn("mx-auto text-center", "w-full md:w-4/5")}>
          <Image
            src="/assets/images/boost.png"
            alt="boost"
            width={261}
            height={172}
            className={cn(
              "relative z-10 mx-auto",
              "-mb-4 md:-mb-12",
              "w-24 sm:w-36 md:w-52 lg:w-64"
            )}
          />
          <h1
            className={cn(
              "font-heading font-semibold uppercase 2xl:leading-[100%]",
              "text-4xl sm:text-5xl md:text-8xl lg:text-9xl 2xl:text-[200px]",
              "mx-auto w-4/5 md:w-full",
              "mb-5 sm:mb-0"
            )}
          >
            natural power
          </h1>
        </div>
        <div
          className={cn(
            "flex flex-wrap items-center sm:flex-nowrap",
            "mt-0 sm:-mt-24"
          )}
        >
          <div className="w-full sm:mt-32 sm:w-2/6">
            <p
              className={cn(
                "font-medium",
                "w-11/12",
                "lg:text-md text-sm xl:text-xl 2xl:text-2xl",
                "mb-5 lg:mb-10"
              )}
            >
              Boost Beverages AG in Switzerland created a revolutionary energy
              drink with the addition of the Moringa Oleifera Tree
            </p>
            <Button asChild variant="default" className={cn("p-0")}>
              <Link href="#founder">try it now</Link>
            </Button>
          </div>
          <div className="w-full sm:w-2/6">
            <Image
              src="/assets/images/drink-banner.png"
              alt="boost"
              width={745}
              height={895}
            />
          </div>
          <div className="w-full sm:mt-32 sm:w-2/6">
            <div
              className={cn("flex justify-end gap-2 sm:gap-5", "text-center")}
            >
              <div>
                <Image
                  src="/assets/images/stores.png"
                  alt="boost"
                  width={114}
                  height={114}
                  className={cn("mx-auto", "w-20 lg:w-28")}
                />
                <p
                  className={cn(
                    "lg:text-md text-sm xl:text-xl",
                    "font-medium",
                    "mt-5",
                    "mx-auto w-4/5"
                  )}
                >
                  larger stores around the world
                </p>
              </div>
              <div>
                <Image
                  src="/assets/images/countries.png"
                  alt="boost"
                  width={114}
                  height={114}
                  className={cn("mx-auto", "w-20 lg:w-28")}
                />
                <p
                  className={cn(
                    "lg:text-md text-sm xl:text-xl",
                    "font-medium",
                    "mt-5",
                    "mx-auto w-4/5"
                  )}
                >
                  Cooperation with countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
