import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full px-5 py-10">
      <div className="mx-auto mb-10 w-10/12">
        <div className="flex items-center justify-center">
          <div className="w-3/5">
            <h2 className="mb-10 text-9xl font-bold uppercase leading-[100%] tracking-tighter">
              get our newsletter
            </h2>
          </div>
          <div className="w-2/5">
            <h4 className="mb-10 w-2/3 text-4xl font-bold uppercase">
              <span className="text-fuchsia-500">15% off</span> on any Boost
              drink
            </h4>
            <div className="relative w-96">
              <div className="!bg-input-box relative h-14 w-96 overflow-hidden rounded-full bg-cover bg-no-repeat">
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className="h-14 w-96 bg-transparent pl-5 pr-16 text-white outline-none"
                />
              </div>
              <Image
                src="/assets/images/submit.png"
                alt="submit"
                height={40}
                width={40}
                className="absolute right-5 top-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-10/12 rounded-full border border-white p-20">
        <div className="flex items-center">
          <div className="relative w-2/6">
            <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white">
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
          <div className="w-3/5">
            <div className="flex justify-between">
              <div className="w-fit">
                <h4 className="mb-5 font-heading text-2xl font-semibold uppercase">
                  Product
                </h4>
                <ul>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      flavors that hits
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      zero excuses
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      performance
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      mellow
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      energy burn
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-fit">
                <h4 className="mb-5 font-heading text-2xl font-semibold uppercase">
                  explore
                </h4>
                <ul>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      home
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      about us
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      testimonials
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Get in touch
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-fit">
                <h4 className="mb-5 font-heading text-2xl font-semibold uppercase">
                  content
                </h4>
                <ul>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      events
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      blogs
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      NFT’s
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      Podcast
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-fit">
                <h4 className="mb-5 font-heading text-2xl font-semibold uppercase">
                  Social
                </h4>
                <ul>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      linkedin
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      instagram
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
                    <Link
                      className="text-white transition-all hover:text-fuchsia-500"
                      href="#"
                    >
                      twitter
                    </Link>
                  </li>
                  <li className="mb-2 text-xl font-medium capitalize">
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
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <p className="m-0 text-xl font-medium">
              © 2024 boost drink Inc. All rights reserved.
            </p>
          </div>
          <div className="w-1/3 text-center">
            <Link
              href="#"
              className="mr-5 border-r border-white pr-5 text-xl font-medium text-white transition-all hover:text-fuchsia-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xl font-medium text-white transition-all hover:text-fuchsia-500"
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="w-1/3">
            <Link
              href="#"
              className="ml-auto flex w-fit items-center justify-end text-xl font-medium text-white hover:text-fuchsia-500"
            >
              <Image
                src="/assets/images/bcak-to-top.png"
                alt="back-to-top"
                height={80}
                width={80}
                className="mr-5"
              />
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
