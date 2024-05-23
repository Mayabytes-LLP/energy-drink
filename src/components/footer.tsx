import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="w-full px-5 py-10">
      <div className="mx-auto mb-10 w-10/12">
        <div className="flex items-center justify-center">
          <div className="w-3/5">
            <h2
              className={cn(
                "mb-10 font-bold uppercase leading-[100%] tracking-tighter",
                "text-4xl lg:text-7xl 2xl:text-9xl"
              )}
            >
              get our newsletter
            </h2>
          </div>
          <div className="w-2/5">
            <h4
              className={cn(
                "mb-10 font-bold uppercase",
                " w-full 2xl:w-2/3",
                "text-2xl lg:text-4xl"
              )}
            >
              <span className="text-fuchsia-500">15% off</span> on any Boost
              drink
            </h4>
            <div className="relative w-96">
              <div
                className={cn(
                  "relative overflow-hidden rounded-full",
                  "h-14 w-60 lg:w-96",
                  "!bg-input-box bg-cover bg-no-repeat"
                )}
              >
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className={cn(
                    "bg-transparent text-white outline-none",
                    "pl-5 pr-16",
                    "h-14 w-60 lg:w-96"
                  )}
                />
              </div>
              <Image
                src="/assets/images/submit.png"
                alt="submit"
                height={40}
                width={40}
                className={cn(
                  "absolute top-3 cursor-pointer",
                  "right-40 lg:right-5"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "mx-auto w-10/12 rounded-xl border border-white lg:rounded-full",
          "p-12 2xl:p-20"
        )}
      >
        <div className="flex flex-wrap items-center">
          <div
            className={cn(
              "relative",
              "w-fit lg:w-2/6",
              "mx-auto mb-20 lg:mb-0"
            )}
          >
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-white md:m-0">
              <Image
                src="/assets/images/footer-logo.png"
                alt="FooterLogo"
                height={117}
                width={123}
              />
            </div>
            <div className="absolute -left-6 -top-6 h-56 w-56">
              <Image
                src="/assets/images/text.png"
                alt="FooterLogo"
                height={264}
                width={267}
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="flex flex-wrap justify-between">
              <div className="mb-10 w-1/2 md:mb-0 md:w-fit">
                <h4
                  className={cn(
                    "mb-5 font-heading font-semibold uppercase",
                    "text-xl 2xl:text-2xl"
                  )}
                >
                  Product
                </h4>
                <ul>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      flavors that hits
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      zero excuses
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      performance
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      mellow
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      energy burn
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-10 w-1/2 md:mb-0 md:w-fit">
                <h4
                  className={cn(
                    "mb-5 font-heading font-semibold uppercase",
                    "text-xl 2xl:text-2xl"
                  )}
                >
                  explore
                </h4>
                <ul>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      home
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      about us
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Products
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      testimonials
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Get in touch
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-fit">
                <h4
                  className={cn(
                    "mb-5 font-heading font-semibold uppercase",
                    "text-xl 2xl:text-2xl"
                  )}
                >
                  content
                </h4>
                <ul>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      events
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      blogs
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      NFT’s
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Podcast
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-fit">
                <h4
                  className={cn(
                    "mb-5 font-heading font-semibold uppercase",
                    "text-xl 2xl:text-2xl"
                  )}
                >
                  Social
                </h4>
                <ul>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      linkedin
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      instagram
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      twitter
                    </Link>
                  </li>
                  <li
                    className={cn(
                      "mb-2 font-medium capitalize",
                      "text-md 2xl:text-xl"
                    )}
                  >
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      tiktok
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 w-10/12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3">
            <p
              className={cn(
                "mb-8 font-medium md:mb-0",
                "xl:text-md text-sm 2xl:text-xl",
                "text-center md:text-left"
              )}
            >
              © 2024 boost drink Inc. All rights reserved.
            </p>
          </div>
          <div className="w-1/2 text-center md:w-1/3">
            <Link
              href="#"
              className={cn(
                "mr-2 pr-2 xl:mr-5 xl:pr-5",
                "border-r border-white",
                "font-medium text-white transition-all hover:text-fuchsia-500",
                "xl:text-md text-sm 2xl:text-xl"
              )}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className={cn(
                "font-medium text-white transition-all hover:text-fuchsia-500",
                "xl:text-md text-sm 2xl:text-xl"
              )}
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="w-1/2 md:w-1/3">
            <Link
              href="#"
              className={cn(
                "ml-auto",
                "font-medium text-white hover:text-fuchsia-500",
                "flex w-fit items-center justify-end",
                "xl:text-md text-sm 2xl:text-xl"
              )}
            >
              <Image
                src="/assets/images/bcak-to-top.png"
                alt="back-to-top"
                height={80}
                width={80}
                className={cn("mr-5", "h-16 2xl:h-20", "w-16 2xl:w-20")}
              />
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
