import React from "react";

const About = () => {
    return (
        <>
        
        <div id="about" className="text-center mt-32 px-4">
        <span className="uppercase montserrat font-bold text-[24px] sm:text-[30px] leading-[38px] tracking-[0.35538em] text-black border-[6px] sm:border-[10px] border-black px-6 sm:px-[65px] py-4 sm:py-[25px] inline-block">
          About me
        </span>
      </div>
   <div className="mt-20 max-w-[760px] mx-auto">
       <p className="raleway leading-[30px] px-5 lg:px-0">
       My name is <span className="font-bold">Fakhar Zaman</span>, I'm a third year <span className="font-bold">Applied Computer Science </span>student at the virtual university of Science and Technology in Faisalabad. I have been learning Front-End technologies for a year now and this time was just enough to make sure that this is my place in the industry.
       <br />
       <br />
       I’m a <span className="font-bold">frontend developer</span> passionate about building modern, user-friendly web applications.  
       With  in React, JavaScript, and responsive design, I bring ideas to life on screen.  
       I focus on clean code, accessibility, and performance to deliver seamless user experiences.  
       Always learning, always improving — one pixel at a time.

       </p>
       
   </div>
   
   <div className="flex justify-center mt-10">
  <div className="relative inline-block group cursor-pointer">
    <span className="border-l-2 border-r-2 text-center montserrat text-lg font-semibold px-8 py-2 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:rounded group-hover:border group-hover:border-black">
      MORE
    </span>
  </div>
</div>

<div className="flex justify-center">
  <img src="/Black.png" alt="" className="mt-20" />

</div>

<section className=" py-20">
  <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-40">

    {/* Design */}
    <div className="relative">
      <div className="absolute text-gray-300 ">
        <img src="/design.png" alt="" className="-ml-10 w-25 -mt-3" />
      </div>
      <h3 className="text-[22px] montserrat font-bold tracking-widest mb-4 z-10 relative">DESIGN</h3>
      <p className="text-[#171717] leading-[25px] raleway z-10 relative">
        I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during my work.
      </p>
    </div>

    {/* Development */}
    <div className="relative">
      <div className="absolute text-gray-300">
      <img src="/development.png" alt="" className="-ml-12 w-29 -mt-3" />
        
      </div>
      <h3 className="text-[22px] montserrat font-bold tracking-widest mb-4 z-10 relative">DEVELOPMENT</h3>
      <p className="text-[#171717] leading-[25px] raleway z-10 relative">
        Based on a project created by me (or any another one provided by you), I can code the website to be fully functional and responsive.
      </p>
    </div>

    {/* Maintenance - full width below */}  
    <div className="relative md:col-span-2 md:w-1/2 md:mx-auto">
      <div className="absolute ">
      <img src="/maintenance.png" alt="" className="-ml-14 w-35 -mt-3" />
        
      </div>
      <h3 className="text-2xl font-bold tracking-widest montserrat mb-4 z-10 relative">MAINTENANCE</h3>
      <p className="text-[#171717] leading-[25px] raleway  z-10 relative">
        I will look after your website, and in case of problems or the need for changes, I can introduce new functionalities and solutions.
      </p>
    </div>

  </div>
</section>
  
  <div className="flex justify-center">
    <img src="/Black.png" alt="" className=""/>
  </div>

 </>
    )
}
export default About