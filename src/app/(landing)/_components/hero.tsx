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
        "px-5 pt-32"
      )}
    >
      <div className={cn("container")}>
        <div className={cn("mx-auto text-center", "w-4/5")}>
          <Image
            src="/assets/images/boost.png"
            alt="boost"
            width={261}
            height={172}
            className={cn("relative z-10 mx-auto", "-mb-8")}
          />
          <h1
            className={cn("font-heading font-semibold uppercase", "text-9xl")}
          >
            natural power
          </h1>
        </div>
        <div className={cn("flex items-center", "-mt-24")}>
          <div className="mt-32 w-2/6">
            <p className={cn("text-2xl font-medium", "w-11/12", "mb-10")}>
              Boost Beverages AG in Switzerland created a revolutionary energy
              drink with the addition of the Moringa Oleifera Tree
            </p>
            <Button asChild variant="default" className={cn("p-0")}>
              <Link href="#founder">try it now</Link>
            </Button>
          </div>
          <div className="w-2/6">
            <Image
              src="/assets/images/drink-banner.png"
              alt="boost"
              width={745}
              height={895}
            />
          </div>
          <div className="mt-32 w-2/6">
            <div className={cn("flex justify-end gap-5", "text-center")}>
              <div>
                <Image
                  src="/assets/images/stores.png"
                  alt="boost"
                  width={114}
                  height={114}
                  className={cn("mx-auto")}
                />
                <p
                  className={cn("text-xl font-medium", "mt-5", "mx-auto w-4/5")}
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
                  className={cn("mx-auto")}
                />
                <p
                  className={cn("text-xl font-medium", "mt-5", "mx-auto w-4/5")}
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
