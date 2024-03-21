import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface props{
    i: number,
    end: number
}

function Personal_1({...p} : props) {
    const {scrollYProgress} = useScroll()

    const smoothProgress = useSpring(scrollYProgress, {bounce: 0})

    const sla = {
        rotate: useTransform(smoothProgress, [(p.i-.80)/p.end, (p.i-.60)/p.end ,(p.i-.35)/p.end, (p.i-.15)/p.end], ["0deg", "20deg","20deg", "-20deg"]),
        translateX: useTransform(smoothProgress, [(p.i-.80)/p.end, (p.i-.60)/p.end ,(p.i-.35)/p.end, (p.i-.15)/p.end], ["-50%", "-20%","-20%", "-80%"]),
        translateY: useTransform(smoothProgress, [(p.i-.80)/p.end, (p.i-.60)/p.end ,(p.i-.35)/p.end, (p.i-.15)/p.end], ["-50%", "-23%","-23%", "-25%"]),
        gap: useTransform(smoothProgress, [(p.i-.80)/p.end, (p.i-.60)/p.end ,(p.i-.35)/p.end, (p.i-.15)/p.end], ["6rem", "4rem","4rem", "1rem"]),
        opacity: useTransform(smoothProgress, [(p.i-1.25)/p.end,(p.i-1)/p.end, (p.i-.01)/p.end, (p.i)/p.end], ["0","1", "1" , "0"]),
        display: useTransform(smoothProgress, [(p.i-1.25)/p.end,(p.i-1)/p.end, (p.i-.01)/p.end, (p.i)/p.end], ["hidden","flex", "flex" , "hidden"]),
    }

  return (
    <div className='h-[300vh] bg-yellow-200 relative'>
        <motion.div className='top-[50%] left-[50%] fixed flex bg-red-500/20 gap-32'
        style={{...sla}}
        >
            <div className='w-64 h-96 bg-blue-500 relative rotate-[-20deg] scale-95'>a</div>
            <div className='w-64 h-96 bg-green-500 relative bottom-16'>a</div>
            <div className='w-64 h-96 rotate-[20deg] bg-red-500'>a</div>
        </motion.div>
    </div>
  )
}
export default Personal_1