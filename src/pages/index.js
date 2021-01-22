import React, { useState } from 'react'
import HeroSection from '../components/Hero'
import { Navbar } from '../components/NavBar'
import SideBar from '../components/SideBar'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleState = () => setIsOpen(!isOpen)
  return (
    <>
      <SideBar isOpen={isOpen} toggleState={toggleState} />
      <Navbar toggleState={toggleState} />
      <HeroSection />
    </>
  )
}
