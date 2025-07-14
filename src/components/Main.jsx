import React from 'react';
import Header from './Header';

const Main = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.7), rgba(19,19,19,.7) 75%, rgba(33,33,33,.7)), url('/tree.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-screen relative"
      >
        <Header />

        <div className="flex flex-col justify-center items-center text-center px-4 h-full">
          <h1 className="md:text-[60px] text-[30px] font-bold montserrat">
            FAKHAR ZAMAN
          </h1>
          <p className="md:text-[30px] text-[20px] font-[400] advent-pro">
            Front End Developer
          </p>

          <div className="mt-5">
            <img src="/White.png" className="w-auto" alt="Scroll Indicator" />
          </div>

          <div className="mt-8 flex items-center gap-7 justify-center">
            {/* ✅ Fixed mailto link */}
            <a
              href="mailto:fakharzm355@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/mail.svg"
                className="w-10 transition duration-200 hover:brightness-75"
                alt="Email"
              />
            </a>

            <a
              href="https://github.com/Fakh02ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.svg"
                className="w-10 transition duration-200 hover:brightness-75"
                alt="GitHub"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/fakhar-zaman-8770b8362/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linked-in.svg"
                className="w-10 transition duration-200 hover:brightness-75"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <section className="bg-[#111] text-white px-8 py-20">
        <div>
          <h2 className="text-3xl font-bold mb-6 montserrat">IT BERRIES</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm a front-end developer passionate about creating responsive and user-friendly web interfaces.
            I specialize in HTML, CSS, JavaScript, Tailwind CSS, and modern frameworks like React.
            I love turning design ideas into interactive and functional websites.
            My goal is to build smooth, fast, and accessible digital experiences.
          </p>

          <a href="https://github.com/Fakh02ar">
            <div className="relative inline-block group cursor-pointer mt-10">
              <span className="border-l-2 border-r-2 montserrat text-lg font-semibold text-white px-8 py-2 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rounded group-hover:border group-hover:border-white">
                MORE
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;


