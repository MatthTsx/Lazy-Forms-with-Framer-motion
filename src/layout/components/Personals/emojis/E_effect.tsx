import { motion } from 'framer-motion'
import React from 'react'
import E_Nerd from './E_Nerd'
import E_Normal from './E_Normal'
import E_Mom from './E_mom'
import E_Dad from './E_dad'

interface props{
    r: number
    t: number
    s: number
    tb: number
    rOrL: boolean
    delay: number
    definer: number
}

function E_effect({...p}: props) {
  return (
    <motion.div className='absolute'
        animate={{
            top: [100 + p.tb, -p.t],
            scale: [.5*p.s, .7*p.s, .6*p.s, 0.3*p.s,0],
            opacity: [0,1, 1, 1, 1,0],
            rotate: [0, 10 * ((p.rOrL ? -1 : 1)), -10 * (p.rOrL ? -1 : 1), 0],
            right: [0, p.r * (p.rOrL ? -1 : 1), -p.r/2 *(p.rOrL ? -1 : 1), p.r/4 *(p.rOrL ? -1 : 1)]
        }}
        transition={{
            duration: 7,
            ease: "easeInOut",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 3,
            delay: p.delay
        }}
    >
        {p.definer == 0 ? <E_Normal/>
        :p.definer == 1 ? <E_Mom/>
        :p.definer == 2 ? <E_Dad/>
        :<E_Nerd/>}
    </motion.div>
  )
}

export default E_effect