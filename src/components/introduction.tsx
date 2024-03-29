"use client";
import React from 'react'
import Image from 'next/image';
import ProfileImage from '@/assets/images/sahil.jpg'
import {motion} from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSessionCtx } from '../../context/active-section-context';


const Introduction = () => { 
const { ref } = useSectionInView("Home",0.5);
const {setActiveSection } = useActiveSessionCtx();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center sm:mb-0 scroll-mt-36"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImage}
              alt={"Sahil Khadayate"}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className=" h-32 w-32 rounded-full border-[0.35rem] shadow-xl border-white"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 text-4xl right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className=" font-bold">Hello I am Sahil.</span> I am a{" "}
        <span className="font-bold">full stack developer.</span> I enjoy
        building <span className=" italic">webapps and PWA's</span>. I focus on{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 px-4 items-center justify-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 
          "
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          {" "}
          Contact me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className=" group text-gray-900 bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-slate-200 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10 dark:text-white/60"
          href="./CV.pdf"
          download
        >
          {" "}
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/sahil-khadayate/"
          className="text-gray-700 bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-slate-200 hover:scale-110 active:scale-105 transition border-black/10 dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Sah314"
          className="text-gray-700 bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:bg-slate-200 hover:scale-110 active:scale-105 transition border-black/10 dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Introduction