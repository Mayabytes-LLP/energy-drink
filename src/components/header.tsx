import Image from "next/image"

import { ModeToggle } from "@/components/mode-toggle"

export default function Header({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-8">
      <Image alt="logo" src="/assets/images/logo.png" width={383} height={60} />
      <nav className="flex flex-wrap justify-center gap-2">{children}</nav>
      <div>
        <ModeToggle />
      </div>
    </header>
  )
}
