import React from "react";

const usingSkills = [
  { name: "HTML5", icon: "/html5.svg" },
  { name: "CSS3", icon: "/css3.svg" },
  { name: "Tailwind", icon: "/tailwindcss.svg" },
  { name: "Javascript", icon: "/js.svg" },
  { name: "Bootstrap", icon: "/bootstrap.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Git", icon: "/git.svg" },
];

const learningSkills = [
  { name: "Redux", icon: "/redux.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
 
];

const Skills = () => {
  return (
    <>
      <div id="skills">
        {/* Main Skills Section */}
        <div className="text-center mt-32 px-4">
          <span className="uppercase montserrat font-bold text-[24px] sm:text-[30px] leading-[38px] tracking-[0.35538em] text-black border-[6px] sm:border-[10px] border-black px-6 sm:px-[65px] py-4 sm:py-[25px] inline-block">
            Skills
          </span>
        </div>

        {/* Using Now Section */}
        <div className="py-16 px-4">
          <div className="max-w-[896px] mx-auto">
            <h2 className="montserrat text-[30px] tracking-[0.185em] font-bold uppercase">
              Using Now:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 pt-20">
              {usingSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col pt-5 items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-4"
                  />
                  <p className="montserrat text-[20px]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="py-16 px-4 ">
          <div className="max-w-[896px] mx-auto">
            <h2 className="montserrat text-[30px] tracking-[0.185em] font-bold uppercase">
              Learning:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-20">
              {learningSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col pt-5 items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-4"
                  />
                  <p className="montserrat text-[20px]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
