import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style' 
import { fadeIn, textVariant } from '../utils/motion'
import {  github } from '../assets'
import { Wrapper } from '../Hoc'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import eye from '../assets/tech/eye.png'

const Works = () => {
  return (
    <>
      <motion.div
   variants={textVariant()}
   >
        <p className={styles.sectionSubText}>My work </p>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>

   </motion.div>
      <div className='w-full  flex'>
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Following projects showcases my skills and resemblance my experience with different kinds of tools..
            
        </motion.p>

      </div>
      <div className=' mt-20 flex flex-wrap gap-7'>
          {projects.map((project , index)=>{
            return (<ProjectCard key={project.name}
                      {...project}  index={index}/>
                      )
          })}
        </div>
    </>
  )
}


const ProjectCard =({index , name , description , tags , image 
, source_code_link , project_link})=>{
  return <motion.div
  variants={fadeIn("up" ,"spring" , index*0.5 , 0.75)}
  className=' '>
<Tilt
options={{
  max:45,
  scale:1,
  speed: 450
  
}}
className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
<div className='relative w-full h-[230px]'>
  <img
  src={image}
  alt={name}
  className='w-full h-full object-cover rounded-2xl'/>
  <div className='absolute inset-0 flex justify-end
  m-3 card-img_hover'>
    {source_code_link && <div className='flex flex-row gap-2'>
    <div className=" black-gradient w-7 h-7
    rounded-full flex justify-center
    items-center cursor-pointer">
      
     <a href={project_link} target='_blank'> 
      <img src={eye} 
      alt="github"
       className='p-1'
       />
       </a>
    </div>
    <div className=" black-gradient w-7 h-7
    rounded-full flex justify-center
    items-center cursor-pointer">
      
     <a href={source_code_link} target='_blank'> 
      <img src={github} 
      alt="eye"
       className='p-1'
       />
       </a>
    </div>
    </div>
}


  </div>
</div>
<div className='mt-5'>
  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
  <p className='mt-2 text-secondary text-[14px]'>{description}</p>

</div>
<div className='mt-4 flex flex-wrap gap-2 '>
  {tags.map(tag=>
    <p key={tag.name} className={ `text-[14px] ${tag.color}`}>
      #{tag.name}
    </p>
  )} 

</div>
</Tilt>

  </motion.div>
}

export default Wrapper(Works,"")