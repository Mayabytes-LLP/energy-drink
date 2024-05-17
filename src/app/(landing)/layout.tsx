import React from "react"

import Header from "../../components/header"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
