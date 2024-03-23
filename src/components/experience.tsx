"use client";
import React from 'react'
import Section_Heading from './section_heading'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '../../context/themecontext';
const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme} = useTheme();
  return (
    <section className='w-full scroll-,t-28 mb=28 sm:mb-40'
    id='experience'
    ref={ref}>
      <Section_Heading Name="Experience" />

      <VerticalTimeline lineColor='' >
        { experienceData.map((item, index) => { return (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="!group"
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                width: "25rem",
              }}
              contentArrowStyle={{
                borderRight: theme==="light"? "0.4rem solid #9ca3af":"0.4rem solid rgba(255,255,255,0.5)"
          
              }}
              date={item.date}
              dateClassName='!text-center'
              icon={item.icon}
              iconStyle={{
                background: theme==="light"? "white":"rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        );
})}
      </VerticalTimeline>
    </section>
  );
}

export default Experience