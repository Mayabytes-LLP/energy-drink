import Image from "next/image"

import { cn } from "@/lib/utils"

export default function EnergyDrinks() {
  return (
    <section className={cn("w-10/12", "py-12")}>
      <div
        className={cn(
          "rounded-full border border-white",
          "flex w-full items-center",
          "px-10",
          "mb-12"
        )}
      >
        <div className={cn("flex items-center justify-between", "w-3/12")}>
          <Image
            src="/assets/images/pattern-1.png"
            alt="pattern1"
            height={19}
            width={154}
          />
          <Image
            src="/assets/images/pattern-2.png"
            alt="pattern2"
            height={51}
            width={50}
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
            The Different Energy Drink
          </h5>
        </div>
        <div className={cn("flex items-center justify-between", "w-3/12")}>
          <Image
            src="/assets/images/pattern-2.png"
            alt="pattern2"
            height={51}
            width={50}
          />
          <Image
            src="/assets/images/pattern-1.png"
            alt="pattern1"
            height={19}
            width={154}
          />
        </div>
      </div>
      <div className={cn("flex items-center justify-between gap-20")}>
        <div className="w-1/2">
          <h2 className="mb-10 text-9xl font-bold uppercase leading-[100%] tracking-tighter">
            SUPER NATURAL POWER
          </h2>
          <ul className="ml-24 text-2xl font-medium">
            <li
              className={cn(
                "mb-10  pl-24",
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat"
              )}
            >
              Boost Beverages AG in Switzerland created a revolutionary energy
              drink with the addition of the Moringa Oleifera Tree, which is
              sold on the beverage market in Switzerland, and soon worldwide.
            </li>
            <li
              className={cn(
                "mb-10  pl-24",
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat"
              )}
            >
              As the owner of the Boost brand, we offer a high-quality energy
              drink product in the versions of "Poseidon's Moringa Energy Drink
              ORIGINAL" and "Poseidon's Moringa Energy Drink LOW SUGAR" on the
              market.
            </li>
          </ul>
        </div>
        <div className="relative w-1/2">
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
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
