import React from 'react'
import { Tilt  } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from'../style'
import { services } from '../constants'
import {fadeIn ,textVariant} from '../utils/motion'
import { Wrapper } from '../Hoc'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    className="mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]"
    variants={fadeIn("","",0.1,1)}>
I am a  skilled software developer, I have gained experience 
in working with React, Redux, and Django.Have a strong 
foundation in Python, C, and C++, I am familiar with OOP's 
 and efficient web application development.
I am eager to collaborate on creating something amazing together
    </motion.p>
    <div className=' mt-20 flex flex-wrap gap-10'>
    {services.map((service,index )=>{
      return (<ServiceCard key={service.title} index = {index}
      {...service}/>)
    })}
    </div>
    </>
  )
}

export default Wrapper(About ,"about")

const ServiceCard =({title, index ,icon})=>{
  return (<Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right" , "spring" , 0.5*index,
    0.75)}
    className='w-full green-pink-gradient 
    p-1 rounded-[20px] shadow-card'
    >
      <div
      options = {
        {
          max:45,
          scale:1,
          speed:450
        }
      }
      className="bg-tertiary rounded-[20px]
      py-5 px-12 min-h-[280px] flex 
      justify-evenly items-center flex-col "
      >
        <img src={icon} alt={title} 
        className="w-16 h-16 object-contain"></img>
        <h3 className="text-[20px] text-white
        text-center font-bold">{title}</h3>
      </div>

    </motion.div>
  </Tilt>)
} 