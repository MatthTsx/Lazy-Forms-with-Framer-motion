import { CommonPropsForScreen } from '@/utils/types'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React from 'react'

function Circle({...p} : CommonPropsForScreen) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})
    const k = (i:number) => (p.i-i/100)/p.end

  return (
    <>
        <svg width="100%" height="100%" viewBox="0 0 449 449" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'>
            <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M224.5 446C346.831 446 446 346.831 446 224.5C446 102.169 346.831 3 224.5 3C102.169 3 3 102.169 3 224.5C3 346.831 102.169 446 224.5 446ZM224.5 449C348.488 449 449 348.488 449 224.5C449 100.512 348.488 0 224.5 0C100.512 0 0 100.512 0 224.5C0 348.488 100.512 449 224.5 449Z" stroke={"black"}
                style={{
                    pathLength: useTransform(smooth, [k(90), k(50)], [0,1])
                }}
            />
        </svg>
        <motion.svg width="100%" height="100%" viewBox="0 0 449 449" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'
            style={{
                opacity: useTransform(smooth, [k(57.5), k(37.5)], [0, 1])
            }}
        >
            <circle cx="224.5" cy="224.5" r="224.5" fill="black"/>
        </motion.svg>
    </>
  )
}

export default Circle