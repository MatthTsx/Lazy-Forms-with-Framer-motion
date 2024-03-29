import { CommonPDataPlus } from '@/utils/types'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function MainCard({...p} : CommonPDataPlus) {
    const scrll = useScroll().scrollYProgress
    const smooth = useSpring(scrll, {bounce: 0.1})

    const k = (i: number) => (p.i-i/100)/p.end

    return (
    <motion.div className='w-[60%] aspect-[1.6] absolute rounded-[11px] Doc-Gradient-1 flex p-4 drop-shadow-md' style={{
        left: useTransform(smooth, [k(92.5), k(90)], ["0%", "60%"])
    }}>
        <Image src={"/images/jake.png"} alt='picture' width={200} height={200} className='w-[30%] h-[60%] rounded-md object-cover opacity-90'/>
        <div className='flex flex-col px-2 w-[70%] gap-1'>
            <p className='font-Rye text-xl'>{getNameStr(p.Data.Name) || "You!"}</p>
            <div className='flexs'>
                <div className='flex items-center gap-4 justify-between'>
                    <p className='font-Rye text-xl'>RG: </p>
                    <input type='text' className='w-[70%] rounded-[2px] bg-white/20 outline-none px-2 text-[16px] font-Twinkle h-[20px]' value={getValue(p.Data.RG)}
                        onKeyDown={e => {
                            const val = e.key
                            if(val == "Backspace") return p.setData(d => ({...d, RG: d.RG.slice(0, d.RG.length-1)}))
                            if(!parseInt(val) || p.Data.RG.length >= 9) return
                            p.setData(d => ({...d, RG: d.RG + val}))
                        }}
                        />
                </div>
                <div className='flex items-center gap-4 justify-between'>
                    <p className='font-Rye text-xl'>CPF: </p>
                    <input type='text' className='w-[70%] rounded-[2px] bg-white/20 outline-none px-2 text-[16px] font-Twinkle h-[20px]' value={getValueCPF(p.Data.CPF)}
                        onKeyDown={e => {
                            const val = e.key
                            if(val == "Backspace") return p.setData(d => ({...d, CPF: d.CPF.slice(0, d.CPF.length-1)}))
                            if(!parseInt(val) || p.Data.CPF.length >= 11) return
                            p.setData(d => ({...d, CPF: d.CPF + val}))
                        }}
                        />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='font-Rye text-[12px] flex justify-between'>
                    <p className='text-black/70'>Mom&apos;s Name: </p>
                    <p>{getNameStr(p.Data.M_Name) || "Mom"}</p>
                </div>
                <div className='font-Rye text-[12px] flex justify-between'>
                    <p className='text-black/70'>Dad&apos;s Name: </p>
                    <p>{getNameStr(p.Data.D_Name) || "Dad"}</p>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 right-0 bg-blue-500 w-4 aspect-square'/>
    </motion.div>
  )
}

const getNameStr = (s: string) => {
    const spl = s.split(" ")
    return spl[0].slice(0, Math.min(10, spl[0].length)) + (spl.length >= 2 ? " " + spl[1][0] + "." : "") + (spl.length >= 3 ? " " + spl[2][0] + "." : "")
}

const getValue = (s: string) => {
    let str = "";
    if(s.at(0)) str += s.at(0)
    if(s.at(1)) str += s.at(1)
    if(s.at(2)) str += "." + s.at(2)
    if(s.at(3)) str += s.at(3)
    if(s.at(4)) str += s.at(4)
    if(s.at(5)) str += "." + s.at(5)
    if(s.at(6)) str += s.at(6)
    if(s.at(7)) str += s.at(7)
    if(s.at(8)) str += "-" + s.at(8)
    return str
}

const getValueCPF = (s:string) => {
    let str = ""
    if(s.at(0)) str += s.at(0)
    if(s.at(1)) str += s.at(1)
    if(s.at(2)) str += s.at(2)
    if(s.at(3)) str += "." + s.at(3)
    if(s.at(4)) str += s.at(4)
    if(s.at(5)) str += s.at(5)
    if(s.at(6)) str += "." + s.at(6)
    if(s.at(7)) str += s.at(7)
    if(s.at(8)) str += s.at(8)
    if(s.at(9)) str += "-" + s.at(9)
    if(s.at(10)) str += s.at(10)
    return str
}

export default MainCard