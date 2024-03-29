import { motion } from 'framer-motion'
import React from 'react'
import Brasil from './Brasil'
import French from './French'
import Japan from './Japan'
import USA from './USA'
import China from './China'
import { _Data_ } from '@/utils/types'


interface props{
    delay: number,
    func: React.Dispatch<React.SetStateAction<_Data_>>,
    name: string,
    isSelected: boolean
}
const multi = 3

function Flag({...p}: props) {

  return (
    <motion.div className='absolute h-[85%] aspect-[1.6] right-[20%]'
    animate={{
        right: ["80%", "-20%"],
    }}
    transition={{
        duration: 5* multi,
        ease: "linear",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 0,
        delay: p.delay * multi,
    }}
    >
        <div className='w-full h-full rounded-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-all' style={{
            boxShadow: "-1px 1px 2px #f048007b",
            filter: !p.isSelected ? "grayscale(1)" : "",
            opacity: p.isSelected ? "1" : "0.2"
        }}
        onClick={(e) => p.func(d => ({...d, Country: p.name}))}
        >
            {getFlag(p.name)}
        </div>
    </motion.div>
  )
}

function getFlag(name: string){
    if(name == "Brasil") return <Brasil/>
    if(name == "French") return <French/>
    if(name == "Japan") return <Japan/>
    if(name == "USA") return <USA/>
    if(name == "China") return <China/>
}

export default Flag