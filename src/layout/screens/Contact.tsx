import { CommonPDataPlus, CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import React from 'react'
import Car from '../components/contact/car'
import Circle from '../components/contact/circle'
import BackgroundC from '../components/contact/Background'
import BoxC from '../components/contact/BoxC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Contact({...p} : CommonPDataPlus) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})
    const k = (i:number) => (p.i-i/100)/p.end
    const [search, setSearch] = React.useState("")

    const sla = async () => {
        await fetch(`https://cdn.apicep.com/file/apicep/${CepPlaceholder(search)}.json`,{mode: 'no-cors'
        } ).then(r => r.json().then(d => {
            if(d.status != 200) return
            p.setData(dt => ({...dt,
                CEP: d.code,
                Address: d.address,
                City: d.city,
                State: d.state,
                district: d.district,
            }))
        })).catch(err => console.log(err))
    }

  return (
    <motion.div className='fixed h-screen w-screen flex items-center justify-center bg-gradient-to-t from-[#9A7E6A] to-[#FAE2D0]' style={{
        display: useTransform(smooth, [k(110), k(100), k(99)], ["none", "none", "flex"]),
        opacity: useTransform(smooth, [k(100), k(90)], [0, 1])
    }}>
        <BackgroundC {...p}/>
        <motion.div className='bg-gradient-to-t from-[#D32E23] to-[#E88742] absolute -z-20 pointer-events-none w-full h-full'
        style={{
            opacity: useTransform(smooth, [k(60), k(40)], [0, 1])
        }}/>

        <motion.div className='absolute z-50 w-[30%] aspect-[1.3] flex items-end justify-between drop-shadow-md left-[5%] top-[10%] overflow-hidden'
            style={{
                opacity: useTransform(smooth, [k(40), k(30), k(10), k(0)], [0, 1, 1, 0])
            }}
        >
            <motion.div className='font-Rye w-[77.5%] bg-[#F2BCAB] p-6 rounded-[16px] h-full flex flex-col gap-4 relative'
                style={{
                    top: useTransform(smooth, [k(40), k(30)], ["100%", "0%"])
                }}
            >
                <p className='text-[16px]'>Delivery address</p>
                <div className='flex items-center h-fit justify-between'>
                    <input type="text" value={CepPlaceholder(search)} onKeyDown={e => {
                        if(e.key == "Backspace") return setSearch(s => s.slice(0, s.length -1))
                        if(!parseInt(e.key) && parseInt(e.key) != 0) return
                        setSearch(s => s + e.key)
                    }}
                        className='px-2 font-Twinkle outline-none rounded-[3px] bg-black/20 text-[20px] w-[7em] text-center'
                    />
                    <button onClick={async () => await sla()}><FontAwesomeIcon icon={faSearch} className='h-[20px] aspect-square hover:scale-[1.1] transition-all'/></button>
                </div>
                <p className='text-[14px] mt-4'>{p.Data.State || "??"}. {p.Data.City.slice(0,20) || "?????"}</p>
                <div className='flex flex-col gap-[-2px] text-[14px]'>
                    <p>{p.Data.district.slice(0, 30) || "?"}.</p>
                    <p>{p.Data.Address.slice(0,30) || "?"}</p>
                </div>
                <p className='mt-4 text-[16px]'>From Us with love</p>
            </motion.div>
            <motion.div className='w-[20%] h-[4em] bg-[#F2BCAB] clip-path-Tri relative' style={{
                top: useTransform(smooth, [k(40), k(29)], ["20%", "0%"])
            }}/>
        </motion.div>

        <div className='w-[35%] aspect-square absolute -z-10 bottom-[-30%] left-[-5%] flex'>
            {getAnimatedComponent(p, 6, 0, 8, -135, 180)}
        </div>
        
        <div className='w-[27.5%] aspect-square absolute -z-10 bottom-[-27.5%] right-[-5%] flex'>
            {getAnimatedComponent(p, 5, 9, 9, -180, 180)}
        </div>

        <div className='w-[20%] aspect-square absolute -z-10 bottom-[-27.5%] left-[35%] flex'>
            {getAnimatedComponent(p, 3, 6, 11, -90, 90)}
        </div>

        <motion.div className='absolute w-full h-full items-center justify-center flex' style={{
            bottom: useTransform(smooth, [k(100), k(60)], ["20%", "0%"])
        }}>
            <BoxC {...p}/>
        </motion.div>

    </motion.div>
  )
}

function getAnimatedComponent({...p} : CommonPropsForScreen, time: number, delay: number, repDelay: number, start: number, end: number){
    return <>
        <motion.div className='w-full h-full rounded-full flex items-start justify-center absolute'
        animate={{rotate: [ start, end]}}
        transition={{
            duration: time,
            ease: 'linear',
            repeat: Infinity,
            delay, repeatDelay: repDelay
        }}
        >
            <div className='flex items-center justify-center'>
                <Car {...p} scale={1.2}/>
            </div>
        </motion.div>
        <div className='w-full h-full flex items-center justify-center absolute -z-10'>
            <div className='w-[85%] aspect-square relative flex items-center justify-center'>
                <Circle {...p}/>
            </div>
        </div>
    </>
}

function CepPlaceholder(s: string){
    let str = ""
    if(s.at(0)) str += s.at(0)
    if(s.at(1)) str += s.at(1)
    if(s.at(2)) str += s.at(2)
    if(s.at(3)) str += s.at(3)
    if(s.at(4)) str += s.at(4)
    if(s.at(5)) str += "-" + s.at(5)
    if(s.at(6)) str += s.at(6)
    if(s.at(7)) str += s.at(7)
    return str
}

export default Contact