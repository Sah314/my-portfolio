"use client";
import React from 'react'
import Section_Heading from './section_heading'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks';
const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section className='w-full'
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
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                width: "25rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid",
                color: "#e3e4e6",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
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