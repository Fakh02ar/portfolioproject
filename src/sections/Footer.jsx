import React from 'react';
import { FaFigma, FaLinkedin, FaCodepen, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-10 text-center mt-20">
      {/* Back to top */}
      <div onClick={scrollToTop} className="cursor-pointer">
        <FaChevronUp className="mx-auto mb-2 text-white animate-bounce" />
        <p className="text-[15px] tracking-[0.18em] montserratfont-semibold">BACK TO TOP</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mt-6 text-[30px]">
        <a href="https://www.figma.com" target="_blank" rel="noreferrer">
          <FaFigma className="hover:text-gray-400 transition" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-gray-400 transition" />
        </a>
        <a href="https://codepen.io" target="_blank" rel="noreferrer">
          <FaCodepen className="hover:text-gray-400 transition" />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="hover:text-gray-400 transition" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-sm text-white">
        ©2021 <span className="font-semibold">Fakhar Zaman</span> All Rights Reserved. 🔥
      </p>
    </footer>
  );
};

export default Footer;
