import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold 
    bg-dark text-light py-3 px-6 shadow-dark dark:bg-light dark:text-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y,transition:{duration: 1.5} }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-60 w-full text-center">Skills</h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-8vw" />
        <Skill name="JavaScript" x="18vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="18vw" />
        <Skill name="NextJs" x="-28vw" y="-12vw" />
        <Skill name="Web Design" x="33vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-18vw" />
        <Skill name="SolidJs" x="-25vw" y="21vw" />
        <Skill name="TailWind Css" x="18vw" y="19vw" />
      </div>
    </>
  );
};

export default Skills;
