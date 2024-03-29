"use client";
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../../context/themecontext';

const Themeswitch = () => {
  const { theme, toggleTheme } = useTheme();
 

  return (
    <button
      className="fixed bottom-9 right-5 bg-white w-[3rem] h-[3rem] opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-gray-950"
      onClick={toggleTheme}
    >
      {theme!=="light" ?<BsMoon className=" text-xl" />:
      <BsSun className=" text-xl" />}
    </button>
  );
}

export default Themeswitch