"use client"

import { forwardRef, HTMLAttributes, RefObject, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import ScrollTo from "./ui/scrollTo"

export const navItems = [
  { label: "Home", href: "#", scrollTo: "hero" },
  { label: "Our Founder’s Story", href: "#", scrollTo: "founder" },
  { label: "WHAT We DO", href: "#", scrollTo: "we_do" },
  { label: "testimonials", href: "#", scrollTo: "testimonials" },
]

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const logoRef = useRef(null)

    const isInView = useInView(logoRef as RefObject<Element>, {
      once: true,
    })

    return (
      <motion.header
        ref={ref}
        initial={{ opacity: 1 }}
        animate={{ opacity: isInView ? 1 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn(
          "left-0 right-0 top-8",
          "absolute mx-auto",
          "flex items-center justify-between",
          "w-11/12",
          "rounded-full border border-white px-5"
        )}
      >
        <Sheet>
          <SheetTrigger className="" asChild>
            <Button variant="secondary" className="p-0">
              <Menu className="mr-2 text-white" size={24} />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex w-full flex-col gap-6">
              <Link href="#" ref={logoRef}>
                <Image
                  alt="logo"
                  src="/assets/images/logo.png"
                  width={383}
                  height={60}
                />
              </Link>
              <ul className={cn("first:*pt-0 last:*pb-0 grid *:py-2")}>
                {navItems.map(({ label, href, scrollTo }) => (
                  <li key={scrollTo}>
                    <ScrollTo
                      elementId={label}
                      variant="link"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-5 font-bold uppercase text-neutral-500"
                      )}
                    >
                      {label}
                    </ScrollTo>
                  </li>
                ))}
                {children}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
        <Image
          alt="logo"
          src="/assets/images/logo.png"
          width={383}
          height={60}
        />
        <div className="flex w-fit items-center gap-3">
          <Link href="#">
            <Image
              src="/assets/images/icon-search.png"
              height={28}
              width={28}
              alt="IconSearch"
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/images/icon-user.png"
              height={28}
              width={28}
              alt="IconUser"
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/images/icon-favourite.png"
              height={28}
              width={28}
              alt="IconFavourite"
            />
          </Link>
          <Link href="#">
            <Image
              src="/assets/images/icon-cart.png"
              height={28}
              width={28}
              alt="IconCart"
            />
          </Link>
        </div>
      </motion.header>
    )
  }
)
Header.displayName = "Header"

export default Header
