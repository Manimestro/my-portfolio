import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { Wrapper } from '../Hoc';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
const Experience = () => {
  return (
   <>
   <motion.div
   variants={textVariant()}
   >
        <p className={styles.sectionSubText}> What 
         I have done so far</p>
      <h2 className={styles.sectionHeadText}>
        Experience
      </h2>

   </motion.div>
   <VerticalTimeline>
   <div>
    {experiences.map((exp , index)=>{
      return (<ExperienceCard exp={exp} index={index}/>)
    })}
 

   </div>
   </VerticalTimeline>
   </>
  )
}

const ExperienceCard =({exp , index})=>{
  return (
  <VerticalTimelineElement
  key={exp.company_name}
  contentStyle = {{background:"#1d1836" , color :"#ffff"}}
  contentArrowStyle={{borderRight :"7px solid #232631"}}
  date={exp.date}
  iconStyle ={{background :exp.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={exp.icon} className='rounded-full' alt={exp.company_name}></img>
    </div>
  }
  >
    <div>
      <h3 className='font-bold text-white text-[24px]'>
        {exp.title}
      </h3>
      <p className='text-secondary font-semibold text-[16px] '
      style={{margin:0}}>{exp.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {exp.points.map((point ,index)=>
      <li key={`exp-${index}`}
      className='text-white-100 text-[14px] pl-1 tracking-wider '>
          {point}
      </li>)}

    </ul>
  </VerticalTimelineElement>
  )
}



export default Wrapper(Experience ,"work")