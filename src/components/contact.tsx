"use client";
import React from 'react'
import Section_Heading from './section_heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import {getErrorMessage} from '@/lib/utils'
import { SendEmail } from '@/servercomponents/resolveEmail';
import SubmitButton from './submitButton';
import toast from 'react-hot-toast';

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
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sahilkhadayatework@gmail.com">
          sahilkhadayatework@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data } = await SendEmail(formData);

          if (data?.data === null && data.error) {
            const errorMessage = getErrorMessage(data.error);
            toast.error(errorMessage);
            return;
          }
          console.log(data);
          toast.success("Email Sent Successfully");
        }}
        className="flex flex-col gap-2 mt-3 pt-3 dark:text-black"
      >
        <input
          name="email"
          type="email"
          className=" rounded-xl h-10 px-4 outline-none border border-black/10 focus:border-black focus:border-2 dark:bg-opacity-50 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          placeholder="Your Email"
          maxLength={50}
        />
        <textarea
          name="message"
          id="message"
          required
          className="rounded-xl px-4 pt-2 h-[10rem] mb-3 outline-none border border-black/10
          focus:border-black focus:border-2 dark:bg-opacity-50 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          maxLength={300}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
    

}

export default Contact