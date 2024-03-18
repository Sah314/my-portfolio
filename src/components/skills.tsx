"use client";
import React from 'react'
import Section_Heading from './section_heading'
import { skillData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Skills = () => {
     const { ref } = useSectionInView("Skills");

  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' ref={ref} id='skills'>
      <Section_Heading Name="Skills" />
      <ul className='flex flex-wrap gap-3 text-lg justify-center text-gray-800'>
        {skillData.map((skill, index) => (
          <li key={index} className='bg-white border-black/[0.1] rounded-2xl px-5 py-3'>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills