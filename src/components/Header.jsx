import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ['About me', 'Skills', 'Projects'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black' : 'bg-black sm:bg-transparent'
        } text-white`}
      >
        <div
          className={`flex justify-between items-center px-4 py-4 max-w-[1170px] mx-auto transition-all duration-300 ${
            scrolled ? 'pt-2' : 'md:pt-[45px]'
          }`}
        >
          {/* Logo */}
          <div>
            <img src="/logo.svg" alt="Logo" className="md:h-11 h-9 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <ul className="flex gap-14 text-[15px] font-[600] items-center">
              {navLinks.map((text, index) => (
                <a
                  key={index}
                  href={text === 'About me' ? '#about' : '#'}
                  onClick={e => {
                    if (text === 'About me') {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 hover:text-gray-400 montserrat"
                >
                  {text}
                </a>
              ))}
              <button className="bg-white hover:bg-gray-400 text-black px-4 py-2 rounded-full font-bold text-[13px] ml-4">
                <a href="#">CONTACT ME</a>
              </button>
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <div className="sm:hidden z-50 absolute right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12' // Cross
                      : 'M4 6h16M4 12h16M4 18h16' // Hamburger
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((text, index) => (
            <a
              key={index}
              href={text === 'About me' ? '#about' : '#'}
              className="text-white text-xl font-semibold montserrat hover:text-gray-400 transition"
              onClick={e => {
                if (text === 'About me') {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }
                setIsOpen(false);
              }}
            >
              {text}
            </a>
          ))}
          <button
            className="bg-white text-black px-6 py-2 rounded-full font-bold text-[13px] hover:bg-gray-300"
            onClick={() => setIsOpen(false)}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      {/* Padding to offset fixed header */}
      <div className="pt-[100px]"></div>
    </>
  );
};

export default Header;
