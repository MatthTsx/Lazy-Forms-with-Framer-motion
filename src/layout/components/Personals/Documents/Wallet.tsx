import Image from 'next/image'
import React from 'react'
import MainCard from './MainCard'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { CommonPDataPlus, CommonPropsForScreen } from '@/utils/types'


function Wallet({...p} : CommonPDataPlus) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})

    const k = (i: number) => (p.i - i/100)/p.end

  return (
    <motion.div className='aspect-[1.6] h-[60%] absolute z-10 items-center flex left-[7.5%]' style={{
        left: useTransform(smooth, [k(95), k(90)], ["-50%", "7.5%"])
    }}>
        <Image src={"/images/wallet.png"} width={600} height={200} alt='wallet' className='h-full object-cover w-auto absolute -z-10'/>
        <MainCard {...p}/>
        <Image src={"/images/wallet2.png"} width={600} height={200} alt='wallet' className='h-full object-cover w-auto absolute'/>
    </motion.div>
  )
}

export default Wallet