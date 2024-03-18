"use client";
import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";




const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);
const ActiveSectionContextProvider = ({ children }: ActiveSectionProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSessionCtx(){
    const ctx = useContext(ActiveSectionContext);
    if(ctx === null){
        throw new Error(
            "Error in active section context l-30"
        )
    }
    return ctx;
}

export default ActiveSectionContextProvider;
