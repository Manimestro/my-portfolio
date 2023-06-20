import React from 'react'

import { FooterIcons
 } from '../constants'
const Contact = () => {
  return (
    <>  
 
    <span className=' hash-span' id={"contact"}>
    &nbsp;
</span>
    <div className=' bg-slate-800 w-full  items-center  '>
      <div  className='w-10/12 py-3 mx-auto  justify-between flex flex-wrap gap-10'>
      <div  className='mx-auto  p-6 w-[500px]   min-w-[300px]' >
        <h2 className='font-medium text-[30px]'> Mani's Portfolio</h2>
        <p className='mt-2 text-[16px]'>Thank you for visiting my personal 
        portfolio website. Connect with me over socials.
        </p> 
      </div>
      <div className='mx-auto p-6 w-[500px] '>
      <div className='flex flex-col'>
      <h1 className='font-medium text-[30px]'>Contact Info</h1>
      <div className='mt-2 flex flex-col'>
        <p1 >+91 6304764188</p1>
      <p1 >manikantatez@gmail.com</p1>
    <p1 >Andhra Pradesh, India-535002</p1>
    
    </div> 
    <div>

    </div>

      </div >
      <div className=' flex mb-2 flex-row mt-2 gap-7'>
        { FooterIcons.map((ele , index)=>
        (
          <div key={ele.link} className="  w-12 h-12
          rounded-full flex justify-center
          items-center cursor-pointer">
            
           <a href={ele.link} target='_blank'> 
            <img src={ele.icon} 
            alt="github"
             className='p-2'
             />
             </a>
            </div>
        ))
      
}
      </div>
       </div>
    </div>
    </div>
  
    </>
     
  )
}

export default Contact 