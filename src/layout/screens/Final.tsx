import { CommonPDataViewer } from '@/utils/types'
import { useScroll, useSpring, useTransform, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import E_Nerd from '../components/Personals/emojis/E_Nerd'

function Final({...p} : CommonPDataViewer) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})
    const k = (i:number) => (p.i-i/100)/p.end


  return (
    <motion.div className='fixed h-screen w-screen flex items-center justify-center bg-[#0B0200]' style={{
        display: useTransform(smooth, [k(110), k(100), k(99)], ["none", "none", "flex"]),
        top: useTransform(smooth, [k(100), k(85)], ["100%", "0%"]),
    }}>
        <motion.div className='pointer-events-none w-full h-full bg-[#0B0200] absolute z-10' style={{
            opacity: useTransform(smooth, [k(10), k(0)], ["0", "1"])
        }}/>
        <motion.div className='font-Rubik_Mono_One text-white text-[102.5px] overflow-hidden flex items-center absolute top-[8%]' style={{
            top: useTransform(smooth, [k(100), k(80)], ["50%", "8%"])
        }}>
            {TitleText()}
        </motion.div>
        <div className='w-full h-96 relative top-[20%] flex items-start justify-between px-[7.5%]'>
            <div className='flex flex-col w-[30%]'>
                <motion.div className='relative' style={{
                    right: useTransform(smooth, [k(100), k(75), k(30), k(10)], ["50%", "0%", "0%", "50%"]),
                    opacity: useTransform(smooth, [k(95), k(75), k(30), k(10)], ["0", "1", "1", "0"])
                }}>
                    <Link className='flex items-center justify-center w-full aspect-[1.8] relative cursor-pointer transition-all hover:translate-y-[-5%]' href={`http://localhost:8080/final.php?name=${p.Data.Name}&email=${p.Data.Email}&m_name=${p.Data.M_Name}&d_name=${p.Data.D_Name}&college=${p.Data.College}&course=${p.Data.Course}&RG=${p.Data.RG}&CPF=${p.Data.CPF}&CEP=${p.Data.CEP}&State=${p.Data.State}&City=${p.Data.City}&address=${p.Data.Address}&district=${p.Data.district}`}>
                        <div className='absolute bg-gradient-to-t from-[#00071742] to-[#323F61] w-full h-full rounded-[20px] blur-[3px]'/>
                        <p className='absolute font-Rubik_Mono_One text-[102px] text-[#0B0200]'>PHP</p>
                    </Link>
                </motion.div>
                <motion.p className='relative w-full font-Rubik_Glitch bg-clip-text text-transparent bg-gradient-to-b from-[#0B0507] to-[#2D3957] text-[25px]'
                    style={{
                        left: useTransform(smooth, [k(95), k(70), k(30), k(5)], ["20%", "0%", "0%", "20%"]),
                        opacity: useTransform(smooth, [k(95), k(70), k(30), k(5)], ["0", "1", "1", "0"])
                    }}
                >click here while running a php server! (only devs)</motion.p>
            </div>
            <motion.div className='w-[55%] h-full flex flex-col gap-[5%] mt-[2%] relative' style={{
                opacity: useTransform(smooth, [k(80), k(65), k(25), k(10)], ["0", "1", "1", "0"]),
                left: useTransform(smooth, [k(80), k(65), k(25), k(10)], ["50%", "0%", "0%", "50%"]),
            }}>
                <div className='flex-shrink-0 flex overflow-x-hidden overflow-y-visible h-[30%] mb-[4%]'>
                    <motion.div className='flex-shrink-0 flex gap-[2%] h-full w-full items-end relative right-[134.9%]'
                        animate={{
                            right: ["134.9%", "0%"]
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            times: [0, 1],
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    >
                        {[...Array(10)].map((p,i) => <motion.div key={i} className='w-[25%] h-[90%] flex-shrink-0 relative opacity-70'
                        whileHover={{top: '-10%', opacity: '1'}}
                        >
                            {getButton(i%5)}
                        </motion.div>)}
                    </motion.div>
                </div>
                {CreditsText()}
            </motion.div>
        </div>
    </motion.div>
  )
}

const getButton = (i: number) => <div className='w-full h-full rounded-md overflow-hidden grayscale hover:grayscale-0 transition-all' style={{
        backgroundColor: i == 0 ? "#131212"
        :i == 1 ? "#FFF2D2" : i == 2 ? "#CA5413" : i == 3 ? "#532206" : "#935B1A"
    }}>
</div>

const CreditsText = () => (<motion.div className='font-Rubik_Mono_One text-white text-[25px] overflow-hidden flex items-center top-[8%]'>
    <motion.div className='flex-shrink-0 relative right-[45.9em]'
        animate={{
            right: ["0em", "45.9em"]
        }}
        transition={{
            duration: 30,
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0,
        }}
    >
        {getCreditsText()} {getCreditsText()}
    </motion.div>
</motion.div>)

const getCreditsText = () => <>
    <span className='text-[#3A5B8E]'>website</span>: {"{"}<span className='text-[#DBFF8D]'>{'"made_by"'}</span>: <span className='text-[#3E1D1D]'>matth</span><span className='text-[#957C75]'>.thales</span> + <span className='text-[#CE0A0A]'>victoria</span><span className='text-[#EA6262]'>.bazetto</span>{"}"}
</>

const TitleText = () => (
    <motion.div className='flex-shrink-0 relative right-[34.85em]'
        animate={{
            right: ["0em", "34.85em"]
        }}
        transition={{
            duration: 30,
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0,
        }}
    >
        {getFinalText()} {getFinalText()}
    </motion.div>)

function getFinalText() {
    return <>
        Thanks for visiting this <span className='bg-gradient-to-r from-[#FA5045] to-[#2B0E05] from-[20%] to-[80%] bg-clip-text text-transparent'>awesome</span> website
    </>
}

export default Final