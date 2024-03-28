import { CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import React from 'react'

function Documentation({...p} : CommonPropsForScreen) {
    const {scrollYProgress: scrl} = useScroll()
    const smooth = useSpring(scrl, {bounce: 0})

    const k = (i: number): number =>
        (p.i-i/100)/p.end


  return (
    <motion.div className='fixed h-screen w-screen bg-blue-500'
        style={{
            display: useTransform(smooth, [k(120),k(100), k(99)], ["none", "none", "flex"])
        }}>
      
    </motion.div>
  )
}

export default Documentation
