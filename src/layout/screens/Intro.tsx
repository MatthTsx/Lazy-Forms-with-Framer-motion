import { CommonPropsForScreen } from '@/utils/types'
import { faLinkedin, faSquareGithub, faSquareInstagram, faSquareXTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const Name1 = "Matth.thales {Mateus A. O}"
const Name2 = "Victoria Gabriela Bazetto Correa"

function Intro({...p} : CommonPropsForScreen) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})
    const k = (i: number) => (p.i-i/100)/p.end

  return (
    <motion.div className='fixed w-full h-full bg-[#0B0200] items-top justify-end flex z-10' style={{
        bottom: useTransform(smooth, [k(20), k(0)], ["0%", "100%"])
    }}>
        <div className='absolute left-[-3.4em] font-Rubik_Mono_One text-[64px] text-white bottom-[47.5%] rotate-[-90deg]'>website by</div>
        <div className='absolute left-[10%] font-Rubik_Mono_One text-[64px] text-white bottom-[0%]'>lazy forms</div>
        {/* <div className='absolute left-[3%] font-Rubik_Mono_One text-[64px] text-white bottom-[2%] rotate-[45deg]'>a</div> */}
        <div className='w-[90%] h-full flex flex-col'>
            {NameThales()}
            {NameVic()}
            {Links()}
        </div>
    </motion.div>
  )
}

const NameThales = () => <div className='font-Rubik_Mono_One text-[102.5px] overflow-hidden flex items-center relative mt-[3%]'>
    <motion.div className='flex-shrink-0 bg-clip-text text-transparent relative bg-gradient-to-r from-[#350000] to-[#875100] overflow-hidden bg-fixed right-[22.95em]'
        animate={{
            right: ["0em", "22.95em"]
        }}
        transition={{
            duration: 30,
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0,
        }}
    >
        {/* @ts-ignore */}
        {[...Name1," ", ...Name1].map((s,i) => <span key={i}>{s}</span>)}
    </motion.div>
</div>

const NameVic = () => <div className='font-Rubik_Mono_One text-[102.5px] overflow-hidden flex items-center relative bottom-[2%]'>
    <motion.div className='flex-shrink-0 bg-clip-text text-transparent relative bg-gradient-to-r from-[#E43801] to-[#530F00] overflow-hidden bg-fixed right-[28.05em]'
        animate={{
            right: ["0em", "28.05em"]
        }}
        transition={{
            duration: 30,
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 0,
        }}
    >
    {/* @ts-ignore */}
    {[...Name2," ", ...Name2].map((s,i) => <span key={i}>{s}</span>)}
    </motion.div>
</div>

const Links = () => {
    
    return (
        <div className='mt-[1%] w-[30%] flex items-center gap-[20px] flex-wrap'>
            {linksData.map((l,i) => (
                <div key={i} className='we-[2.9em] w-[13.25%] aspect-square rounded-[6px] flex-shrink-0 transition-all hover:scale-[1.1]' style={{
                    backgroundColor: l.From == Whom.Thales ? "#511B01" : "#C22F00"
                }}>
                    <Link href={l.link} className='w-full h-full flex items-center justify-center'>
                        <FontAwesomeIcon icon={Icons[l.icon]} className='w-[90%] h-[90%]' color={l.From == Whom.Thales ? "#130000" : "#130000"}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

enum Whom{
    Thales,
    Vic
}

const Icons = [faSquareGithub, faLinkedin, faSquareInstagram, faSquareEnvelope, faSquareXTwitter, faSquareYoutube]

const linksData = [
    {  From: Whom.Thales, link: "https://github.com/MatthTsx", icon: 0 },
    {  From: Whom.Thales, link: "https://www.linkedin.com/in/mateus-a-o-87877226a/", icon: 1 },
    {  From: Whom.Thales, link: "mailto:shakii876954@gmail.com", icon: 3 },
    {  From: Whom.Thales, link: "https://www.youtube.com/channel/UCyicx8CvtV8Ij4XneZk_8KA", icon: 5 },
    {  From: Whom.Thales, link: "https://www.instagram.com/matth.thales/", icon: 2 },
    {  From: Whom.Vic, link: "https://www.instagram.com/victoriabazetto/", icon: 2 },
    {  From: Whom.Vic, link: "https://twitter.com/victoriabazetto", icon: 4 },
    {  From: Whom.Vic, link: "mailto:gabrielavictoriaaa@outlook.com", icon: 3 },
    {  From: Whom.Vic, link: "https://www.linkedin.com/in/victória-gabriela-a05868212/", icon: 1 },
    {  From: Whom.Vic, link: "https://github.com/VicWanda", icon: 0 },
    // {  From: Whom.Thales, link: "https://twitter.com/Matth_js", icon: 4 },
    // {  From: Whom.Vic, link: "", icon: 0 },
]


export default Intro