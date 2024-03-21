"use client";
import React from 'react'
import Section_Heading from './section_heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { SendEmail } from '@/servercomponents/resolveEmail';

const Contact = () => {
  const {ref} = useSectionInView("Contact")

  return (
    <motion.section
      ref={ref}
      className="mt-28 mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      // viewport={{
      //   once:true
      // }}
    >
      <Section_Heading Name="Contact Me" />
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          try {
            await SendEmail(formData);
          } catch (error) {}
        }}
        className="flex flex-col gap-2 mt-3 pt-3 justify-items-start"
      >
        <input
          name="email"
          type="email"
          className=" rounded-xl h-10 px-4 outline-none border border-black/10 focus:border-black focus:border-2"
          required
          placeholder="Your Email"
          maxLength={50}
        />
        <textarea
          name="message"
          id="message"
          required
          className="rounded-xl px-4 pt-2 h-[10rem] mb-3 outline-none border border-black/10
          focus:border-black focus:border-2"
          placeholder="Your Message"
          maxLength={300}
        />
        <button
          type="submit"
          className="group flex rounded-full bg-gray-800 text-white h-12 w-32 p-3 justify-center items-center gap-2 text-center hover:bg-gray-950 hover:scale-110 active:scale-105 transition"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  );
    

}

export default Contact