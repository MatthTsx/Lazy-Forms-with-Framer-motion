import { CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'
import React from 'react'
import Flag from '../components/Personals/country/Flag'

const Flags = {
    "1": [
        "Brasil", "USA", "China", "French", "Japan"
    ]
}

function Personal_2({...p}: CommonPropsForScreen) {
    const scroll = useScroll()
    const smooth = useSpring(scroll.scrollYProgress, {bounce: 0})
    const k = (k: number): number => (p.i-k/100)/p.end
    const [Selected, setSelected] = React.useState("")

  return (
    <motion.div className='fixed w-full h-full P2-Gradient-1'
        style={{
        display: useTransform(smooth, [k(150), k(140), k(1),k(0)], ["none", "none", "flex","none"]),
        top: useTransform(smooth, [k(140), k(100)], ["400%", "0%"])
    }}
    >
        <motion.div className='absolute w-[33.67%] aspect-square rounded-full P2-Gradient-2 right-[27.5%] overflow-hidden' style={{
            bottom: useTransform(smooth, [k(110), k(90)], ["-100%","-22.5%"]),
            scale: useTransform(smooth, [k(78), k(50)], ["1", "5"])
        }}/>
        <motion.div className='w-[39%] aspect-square rotate-45 -right-[10%] absolute bg-gradient-to-bl from-black to-[#261200]' style={{
            bottom: useTransform(smooth, [k(110), k(90)], ["-200%", "-40%"]),
            rotate: useTransform(smooth, [k(120), k(90)], ["-15deg", "45deg"]),
            background: useTransform(smooth, [k(78), k(53)], ["#000000","#FF810D"]),
            opacity: useTransform(smooth, [k(68), k(58)], ["1", "0"])
        }}/>
        <motion.div className='w-[30%] aspect-square rotate-45 -left-[5%] absolute bg-gradient-to-tr from-black to-[#261200]' style={{
            bottom: useTransform(smooth, [k(110), k(90)], ["-200%", "-30%"]),
            rotate: useTransform(smooth, [k(120), k(90)], ["90deg", "45deg"]),
            background: useTransform(smooth, [k(78), k(53)], ["#000000","#FF810D"]),
            opacity: useTransform(smooth, [k(68), k(58)], ["1", "0"])
        }}/>
        <motion.div className='w-[45%] aspect-square rotate-45 left-[30%] -z-10 absolute bg-gradient-to-br from-black to-[#261200]' style={{
            bottom: useTransform(smooth, [k(120), k(90)], ["-200%", "-30%"]),
            background: useTransform(smooth, [k(78), k(50)], ["#000000","#FF810D"]),
        }}/>
        <motion.p className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-80%] font-Rubik_Microbe text-white text-[64px] opacity-75' style={{
            color: useTransform(smooth, [k(73), k(68)], ["#ffffff", "#000000"]),
            rotate: useTransform(smooth, [k(73), k(53)], ["0deg", "-30deg"]),
            translateX: useTransform(smooth, [k(73), k(53)], ["50%", "-20%"]),
            translateY: useTransform(smooth, [k(73), k(53)], ["-80%", "-200%"]),
        }}>Where r u from?</motion.p>

        <motion.div className='w-[120%] h-[28%] absolute rotate-[-30deg] bottom-[10%] left-0 flex'>
            <motion.div className='bg-gradient-to-t from-[#040014] to-[#1C0800] h-full absolute' style={{
                width: useTransform(smooth, [k(50), k(40)], ["0", "100%"]),
                display: useTransform(smooth, [k(60), k(20), k(10)], ["flex","flex", "none"])
        }}/>
            <div className='absolute flex h-full w-full justify-end'>
                <motion.div className='bg-gradient-to-t from-[#040014] to-[#1C0800] h-full absolute' style={{
                    width: useTransform(smooth, [k(20), k(10)], ["100%", "0%"]),
                    display: useTransform(smooth, [k(60), k(20), k(10)], ["none","none", "flex"])
        }}/>
            </div>
            <motion.div style={{
                display: useTransform(smooth, [k(100), k(40), k(20), k(10), k(9)], ["none", "none", "flex", "flex", "none"]),
                opacity: useTransform(smooth, [k(40), k(35), k(20), k(17.5)], ["0", "1", "1", "0"])
            }}>
                {Flags["1"].map((a,i) => <Flag key={i} delay={i} func={setSelected} name={a} isSelected={a == Selected}/>)}
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Personal_2