import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { Navbar } from '../components/NavBar';
import ProjectSection from '../components/Projects';
import SideBar from '../components/SideBar';
import Socials from '../components/Socials';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleState = () => setIsOpen(!isOpen);
  return (
    <>
      <SideBar isOpen={isOpen} toggleState={toggleState} />
      <Navbar toggleState={toggleState} />
      <HeroSection />
      <InfoSection />
      <ProjectSection />
      <Footer />
      <Socials />
    </>
  );
};
