"use client";
import React from 'react'
import Section_Heading from './section_heading'
import { skillData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial:{
    opacity:0,
    y:100
  },
  animate:(index:number)=>{
  return {  opacity:1,
    y:0,
    transition:{
      delay:0.05*index
    }}
  },
}

const Skills = () => {
     const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <Section_Heading Name="Skills" />
      <ul className="flex flex-wrap gap-3 text-lg justify-center text-gray-800">
        {skillData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once:true,
            }}
            custom={index}
            key={index}
            className="bg-white border-black/[0.1] rounded-2xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills