import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hero1 from '../../public/background1.png'; // Default large screen image
import HeroMobile from '../../public/background 2.png'; // Smaller screen image
import ButtonSvg from '../../public/button.svg'; // Ensure this is the correct path

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint at 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-[#f8edeb] flex flex-col shadow-glow md:flex-row items-center justify-center min-h-screen mx-auto"
    >
      <div className="text-center md:text-left p-4 md:p-20 z-10">
        <h1 className="text-3xl md:text-6xl font-fuel font-bold text-[#932b2d] mb-4">
          HERZLICHEN WILKOMMEN!
        </h1>
        <p className="text-lg text-[#381d1d] font-typewriter md:text-xl mb-8">
        Entdecken Sie unser Dienstleistungsangebot <br />und erfahren Sie,wie wir Ihnen helfen können, Ihr Projekt auf die nächste Stufe zu heben.
        </p>
        <div className="flex justify-center md:justify-start">
          <div
            onClick={scrollToSection("#contacts")}
            className="inline-flex items-center animate-pulse justify-center ml-6 cursor-pointer bg-no-repeat bg-center bg-cover hover:rotate-[30deg] transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${ButtonSvg.src})`,
              width: "200px",
              height: "100px",
            }}
          >
            <a href="#contacts" className="text-transparent w-full h-full flex items-center justify-center">
              Contact Us {/* Invisible text for accessibility, now clickable */}
            </a>
          </div>
        </div>
      </div>
      <div className={`relative ${isMobile ? 'w-[400px] mt-[-850px] h-[200px]' : `flex items-center ml-[-600px] justify-center relative h-full w-full`}`}>
        <Image
          src={isMobile ? HeroMobile : Hero1}
          alt="Hero Background"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Hero;