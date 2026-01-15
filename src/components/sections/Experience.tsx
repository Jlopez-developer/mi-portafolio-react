import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../constants/styles";

import { ExperienceSCard } from "../../constants";

import { SectionWrapper } from "../../hoc";


import { TMExperienceCard } from "../../types";


const ExperienceCard: React.FC<TMExperienceCard> = (ExperienceSCard) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={ExperienceSCard.date}
      iconStyle={{ background: ExperienceSCard.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={ExperienceSCard.icon}
            alt={ExperienceSCard.companyName[0].name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{ExperienceSCard.title}</h3>

        <div className="flex flex-wrap gap-2 mt-2">
          {ExperienceSCard.companyName.map((tech, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-1 sm:py-2 rounded border whitespace-nowrap"
              style={{ color: tech.color, borderColor: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

  
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {ExperienceSCard.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};




const experience = () => {
  return (
    <>
      {/* <Header useMotion={true} {...config.sections.experience} /> */}

    <>  
      <p className={styles.sectionSubText}>What I have done so far </p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {ExperienceSCard.map((ExperienceSCard, index) => (
            <ExperienceCard key={index} {...ExperienceSCard} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(experience, "work");
