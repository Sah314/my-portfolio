"use client";

import React from 'react'
import Section_Heading from './section_heading'
import Project from './project'
import {projectData} from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section
    ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <Section_Heading Name='Projects'/>
        <div>
    {projectData.map((project, index)=>
     (
      <React.Fragment key={index}>
      <Project  {...project}/>
      </React.Fragment>
     )
    )}
        </div>
    </section>
  )
}


export default Projects

