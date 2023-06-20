import {motion } from 'framer-motion'

import {styles} from '../style'

import { staggerContainer } from '../utils/motion'
const Wrapper=(Component , id)=>
{
    const Hoc =()=>{
        return( 
        <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true , amount:0.25}}
        className={`${styles.padding} max-w-7xl
        mx-auto realtive z-0`}>
        <span className=' hash-span' id={id}>
            &nbsp;
        </span>
        <Component />
        </motion.section>
        
        )
    }

    return Hoc 

}

export default Wrapper