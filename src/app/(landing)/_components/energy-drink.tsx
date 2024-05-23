import Image from "next/image"

import { cn } from "@/lib/utils"

export default function EnergyDrinks() {
  return (
    <section className={cn("w-11/12", "py-12")}>
      <div
        className={cn(
          "rounded-full border border-transparent sm:border-white",
          "flex w-full items-center",
          "px-10",
          "mb-10 sm:mb-20 lg:mb-12"
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
            src="/assets/images/pattern-1.png"
            alt="pattern1"
            height={19}
            width={154}
            className="w-20 lg:w-36"
          />
          <Image
            src="/assets/images/pattern-2.png"
            alt="pattern2"
            height={51}
            width={50}
            className="w-8 lg:w-14"
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
            The Different Energy Drink
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
            src="/assets/images/pattern-2.png"
            alt="pattern2"
            height={51}
            width={50}
            className="w-8 lg:w-14"
          />
          <Image
            src="/assets/images/pattern-1.png"
            alt="pattern1"
            height={19}
            width={154}
            className="w-20 lg:w-36"
          />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center justify-between gap-20",
          "flex-wrap sm:flex-nowrap"
        )}
      >
        <div className="w-full sm:w-1/2">
          <h2
            className={cn(
              "font-bold uppercase leading-[100%] tracking-tighter",
              "text-3xl md:text-4xl lg:text-7xl 2xl:text-9xl",
              "mb-5 sm:mb-10"
            )}
          >
            SUPER NATURAL POWER
          </h2>
          <ul
            className={cn(
              "ml-0 md:ml-5 lg:ml-16 xl:ml-24",
              "lg:text-md text-sm xl:text-xl 2xl:text-2xl",
              "font-medium"
            )}
          >
            <li
              className={cn(
                "mb-5 md:mb-10",
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat",
                "2xl:pl-24"
              )}
            >
              Boost Beverages AG in Switzerland created a revolutionary energy
              drink with the addition of the Moringa Oleifera Tree, which is
              sold on the beverage market in Switzerland, and soon worldwide.
            </li>
            <li
              className={cn(
                "mb-10",
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat",
                "2xl:pl-24"
              )}
            >
              As the owner of the Boost brand, we offer a high-quality energy
              drink product in the versions of "Poseidon's Moringa Energy Drink
              ORIGINAL" and "Poseidon's Moringa Energy Drink LOW SUGAR" on the
              market.
            </li>
          </ul>
        </div>
        <div className="relative w-full sm:w-1/2">
          <Image
            src="/assets/images/sec-2.png"
            alt="energy"
            height={988}
            width={839}
            className="mx-auto"
          />
          <Image
            src="/assets/images/drink.png"
            alt="energy"
            height={878}
            width={558}
            className={cn(
              "absolute bottom-0 left-0 right-0 mx-auto",
              "-top-20 2xl:top-0"
            )}
          />
        </div>
      </div>
    </section>
  )
}
