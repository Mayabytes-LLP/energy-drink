import Image from "next/image"

import { cn } from "@/lib/utils"

const qualities = [
  {
    item: "CBD ingradients",
  },
  {
    item: "Sexual performance enhancers",
  },
  {
    item: "Enhance your workout",
  },
]

export default function DrinkQuality() {
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
            src="/assets/images/fire.png"
            alt="pattern1"
            height={19}
            width={171}
          />
          <Image
            src="/assets/images/settings.png"
            alt="pattern2"
            height={41}
            width={61}
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
            boost drink qualities
          </h5>
        </div>
        <div className={cn("flex items-center justify-between", "w-3/12")}>
          <Image
            src="/assets/images/settings.png"
            alt="pattern2"
            height={41}
            width={61}
          />
          <Image
            src="/assets/images/fire.png"
            alt="pattern1"
            height={19}
            width={171}
          />
        </div>
      </div>
      <div className={cn("flex items-center justify-between gap-20")}>
        <div className="relative w-1/2">
          <Image
            src="/assets/images/quality.png"
            alt="energy"
            height={901}
            width={715}
            className="mx-auto"
          />
          <div className={cn("flex items-center justify-center", "-mt-80")}>
            {qualities.map((data, index) => (
              <div
                key={index}
                className={cn(
                  "bg-blur-circle h-72 w-72 bg-contain",
                  "flex items-center justify-center",
                  "-mr-9",
                  "first:z-20",
                  "z-10",
                  "last:z-0"
                )}
              >
                <p
                  className={cn(
                    "text-2xl font-medium",
                    "text-center",
                    "mx-auto w-4/5"
                  )}
                >
                  {data.item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="mb-10 text-9xl font-bold leading-[100%]">
            NATURAL TASTE AND POWER
          </h2>
          <ul className="ml-24 text-2xl font-medium">
            <li
              className={cn(
                "mb-10  pl-24",
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat"
              )}
            >
              Boosts energy drink has many important vitamins and minerals. The
              Moringa leaves have 7 times more vitamin C than oranges and 15
              times more potassium than bananas. Moringa tree is also ritch with
              calcium, protein, iron, and amino acids, which help your body heal
              and build muscle, but at the same time has a unique and palatable
              taste.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
