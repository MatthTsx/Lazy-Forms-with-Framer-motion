import { CommonPDataPlus, CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Wallet from '../components/Personals/Documents/Wallet'

function Documentation({...p} : CommonPDataPlus) {
    const {scrollYProgress: scrl} = useScroll()
    const smooth = useSpring(scrl, {bounce: 0})

    const k = (i: number): number =>
        (p.i-i/100)/p.end


  return (
    <motion.div className='fixed h-screen w-screen flex items-center justify-center'
        style={{
            display: useTransform(smooth, [k(120),k(105), k(99)], ["none", "none", "flex"]),
            scale: useTransform(smooth, [k(105), k(95)], ["5", "1"]),
            top: useTransform(smooth, [k(105), k(95)], ["60%", "0%"]),
            right: useTransform(smooth, [k(105), k(95)], ["75%", "0%"]),
        }}>
      <Image src={"/images/top-view.jpg"} width={2000} height={2000} priority alt='bg image' className='w-full h-full absolute -z-10 object-cover'/>
      <div className='bg-orange-400 w-[10%] aspect-square absolute right-[30%] rotate-[10deg] drop-shadow-2xl top-[30%] mt-[1%] -mr-[.5%] shadow-md rounded-sm'/>
      <motion.div className='bg-orange-400 w-[10%] aspect-square absolute right-[30%] drop-shadow-2xl top-[30%] shadow-md flex justify-center rounded-sm' style={{
        scale: useTransform(smooth, [k(105), k(95)], ["5", "1"]),
        rotate: useTransform(smooth, [k(105), k(95)], ["0deg", "10deg"])
      }}>
        <p className='font-Twinkle text-[12px] px-2 drop-shadow-lg pt-[20%] rotate-[2deg]'>Where am I from?</p>
      </motion.div>
      <Wallet {...p}/>
    </motion.div>
  )
}

export default Documentation
