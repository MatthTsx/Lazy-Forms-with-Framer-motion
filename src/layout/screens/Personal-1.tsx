import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Personal_Input from '../components/Personals/Personal_Input'
import type { CommonPropsData } from '@/utils/types'
import E_effect from '../components/Personals/emojis/E_effect'


const EmojisEffectLeft = [
    {r:70, t:100, s:.4, tb:50, rOrL:true, delay:1, definer:0},
    {r:20, t:100, s:.4, tb:50, rOrL:false, delay:3.5, definer:1},
    {r:30, t:100, s:.4, tb:50, rOrL:true, delay:6, definer:3},
    {r:70, t:100, s:.4, tb:50, rOrL:false, delay:7.5, definer:2},
    {r:50, t:100, s:.4, tb:50, rOrL:true, delay:9, definer:3},
]


function Personal_1({...p} : CommonPropsData) {
    const {scrollYProgress} = useScroll()
    const k = (k: number): number => (p.i-k/100)/p.end
    const smoothProgress = useSpring(scrollYProgress, {bounce: 0, damping: 20})

    const sla = {
        translateX: useTransform(smoothProgress, [k(80)], ["-50%"]),
        translateY: useTransform(smoothProgress, [k(80)], ["-50%"]),
        gap: useTransform(smoothProgress, [k(85), k(70), k(50), k(40)], ["6rem", ".2rem", ".2rem", "6rem"]),
        // opacity: useTransform(smoothProgress, [k(125), k(100), k(2), k(1)], ["0","1", "1" , "0"]),
        // display: useTransform(smoothProgress, [k(125),k(100), k(1), k(0)], ["none","flex", "flex" , "none"]),
    }

    const You = {
        // translateY: useTransform(smoothProgress, [k(85), k(60)], ["0", "-150%"]),
        scale: useTransform(smoothProgress, [k(85), k(60)], ["1", "0.75"]),
        opacity: useTransform(smoothProgress, [k(85), k(60), k(47), k(45)], ["1", ".5", ".5", "0"]),
    }
    const Nerd = {
        scale: useTransform(smoothProgress, [k(47), k(35)], [".75", "1"]),
        opacity: useTransform(smoothProgress, [k(47), k(40)], ["0", "1"]),
        display: useTransform(smoothProgress, [k(99), k(50), k(30)], ["none", "none", "flex"])
    }

    const Dad_Mom = (isMom: boolean) => {
        return {
            rotate: useTransform(smoothProgress, [k(85) , k(70), k(50), k(40)], [isMom ? "-20deg" : "20deg", "0deg", "0deg", isMom ? "-20deg" : "20deg"]),
            scale: useTransform(smoothProgress, [k(85), k(70), k(50), k(40)], [".75" ,"1", "1", ".75"]),
            opacity: useTransform(smoothProgress, [k(85), k(70), k(50), k(40)], [".5", "1", "1", ".5"]),
        }
    }

    const vanishing_ = {
        display: useTransform(smoothProgress, [k(125),k(120),k(100), k(-20), k(-30)], ["none","none","flex", "flex" , "none"]),
    }

  return (
    <motion.div className='bg-light-yellow fixed' style={vanishing_}>
        <div className='fixed bg-gradient-to-b from-light-yellow to-[#FFC8C0] from-80% w-full h-[100vh] -z-10'/>
        <motion.div className='top-[50%] left-[50%] fixed flex gap-32 justify-between'
        style={{...sla}}
        >

            <motion.div className='scale-75 rotate-[-20deg] relative top-16' style={Dad_Mom(true)}>
                <Personal_Input inputType={1} setData={p.setData}/>
            </motion.div>
    
            <div className='relative bottom-8'>
                <motion.div className='absolute z-10' style={Nerd}>
                    <Personal_Input inputType={3} setData={p.setData}/>
                </motion.div>
                <motion.div className='' style={You}>
                    <Personal_Input inputType={0} setData={p.setData}/>
                </motion.div>
            </div>

            <motion.div className='scale-75 rotate-[20deg] top-16 relative' style={Dad_Mom(false)}>
                <Personal_Input inputType={2} setData={p.setData}/>
            </motion.div>
        </motion.div>
        <div className='fixed w-64 h-64 bottom-0 z-[-1] opacity-75 -left-2'>
            {EmojisEffectLeft.map((E, i) => <E_effect key={i} {...E} />)}
        </div>
        <div className='fixed w-64 h-64 bottom-0 z-[-1] opacity-75 -right-2'>
            {EmojisEffectLeft.map((E, i) => <E_effect key={i} {...E} rOrL={!E.rOrL}/>)}
        </div>
    </motion.div>
  )
}
export default Personal_1