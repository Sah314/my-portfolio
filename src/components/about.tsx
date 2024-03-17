"use client"
import React from 'react'
import Section_Heading from './section_heading'
import { motion } from 'framer-motion'

type Props = {}

const About = () => {
  return (
   <motion.section className='mb-28 max-w-[45rem] text-center leading-6 sm:mb-40 scroll-mt-28'
   initial={{opacity:0, y:100}}
   animate={{opacity:1,y:0}}
   transition={{delay:0.2}}
   id='about'
   >
    <Section_Heading Name='About Me'/>
<p className="mb-3 text-xl">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to pursue my
        passion for programming. I have participated in numerous hackathons. {" "}
        One aspect of programming that I particularly enjoy is <span className="italic">the problem-solving process</span>. I derive great satisfaction from the feeling of finally <span className="underline">uncovering a solution to a challenging problem.</span> My core stack
        remains{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with
        <span className="font-medium">TypeScript, Golang, and GCP</span> . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
</p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
   </motion.section>
  )
}

export default About