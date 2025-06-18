import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['about', 'skills', 'projects', 'contact'];
      let found = false;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            found = true;
            break;
          }
        }
      }

      if (!found && window.scrollY < 200) {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
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
          {/* Logo with scroll to top */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveLink('');
              setIsOpen(false); // also close mobile menu if open
            }}
          >
            <img src="/logo.svg" alt="Logo" className="md:h-11 h-9 w-auto cursor-pointer" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-14 text-[15px] font-[600]">
            {navLinks.map(({ id, label }, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={`relative montserrat hover:text-gray-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
                  activeLink === id ? 'after:w-full' : 'after:w-0'
                }`}
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className={`border border-white px-2 py-2 rounded-full text-sm uppercase tracking-wider font-bold bg-white text-black transition duration-300 montserrat hover:bg-gray-300 cursor-pointer ${
                activeLink === 'contact' ? 'ring-2 ring-white' : ''
              }`}
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Toggle */}
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
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
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
          {navLinks.map(({ id, label }, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-xl font-semibold montserrat hover:text-gray-400 transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
                setIsOpen(false);
              }}
            >
              {label}
            </a>
          ))}

          <button
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false);
            }}
            className="border border-white px-6 py-2 rounded text-base uppercase tracking-wider font-bold hover:bg-white hover:text-black transition duration-300 montserrat"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="pt-[100px]"></div>
    </>
  );
};

export default Header;
