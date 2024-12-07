import React, { useState, useRef, useEffect } from 'react';
import coffeebutton from '../assets/coffeebutton.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.style.backgroundColor = "#1E0B00"; // Change navbar background
        navRef.current.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Optional shadow
      } else {
        navRef.current.style.backgroundColor = "transparent"; // Reset background
        navRef.current.style.boxShadow = "none"; // Reset shadow
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="bg-[#1E0B00]  py-4 fixed w-full z-50 " ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
             <p className='text-[#A5582B] text-4xl font-bold '> <span className='text-white'>Cafe</span>Rose</p>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <a href="/" className="text-white font-normal text-lg hover:text-[#A5582B]">Home</a>
            <a href="/about" className="text-white font-normal text-lg hover:text-[#A5582B]">About</a>
            <a href="/services" className="text-white font-normal text-lg hover:text-[#A5582B]">Services</a>
            <a href="/portfolio" className="text-white font-normal text-lg hover:text-[#A5582B]">Portfolio</a>
            <a href="/contact" className="text-white font-normal text-lg hover:text-[#A5582B]">Contact</a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-indigo-300 ">
            <img
            className="object-cover object-center rounded "
            alt="hero"
            src={coffeebutton}
            width='80'
            height='80'
            
          />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`menu bg-[#1E0B00] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-500' : 'max-h-0'} md:hidden `}>
        <a href="/" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Home</a>
        <a href="/about" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">About</a>
        <a href="/services" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Services</a>
        <a href="/portfolio" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Portfolio</a>
        <a href="/contact" className="block px-4 py-2 text-gray-300  hover:text-indigo-300">Contact</a>
        <a href="#" className="block text-center px-4 py-2 text-gray-300 font-medium hover:text-indigo-300">
        <img
            className="object-cover object-center rounded "
            alt="hero"
            src={coffeebutton}
            width='80'
            height='80'
            
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;