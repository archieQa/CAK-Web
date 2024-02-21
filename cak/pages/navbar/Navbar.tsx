'use client'
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = ({ toggle, isNavOpen }: { toggle: () => void, isNavOpen: boolean }) => {

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='w-full h-15 sticky z-10 top-0 bg-black'>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              {isNavOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff">
                  <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                </svg>
              )}
            </button>
            <div className="hidden md:flex gap-x-10 text-white">
              <ul className="flex gap-8">
                <li><a href="#services" onClick={scrollToSection('#services')}><p>Services</p></a></li>
                <li><a href="#portfolio" onClick={scrollToSection('#portfolio')}><p>Portfolio</p></a></li>
                <li><a href="#about" onClick={scrollToSection('#about')}><p>About Us</p></a></li>
                <li><a href="#contacts" onClick={scrollToSection('#contacts')}><p>Contacts</p></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;