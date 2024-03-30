import { CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'
import React from 'react'

function BoxC({...p}: CommonPropsForScreen) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce:0})
    const k = (i:number) => (p.i-i/100)/p.end

    const PathStyle = {
        pathLength: useTransform(smooth, [k(90), k(50)], [0, 1])
    }

  return (
    <>
        <svg width="342" height="287" viewBox="0 0 342 287" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'>
            <motion.path style={PathStyle}
            fill-rule="evenodd" clip-rule="evenodd" d="M9.15527e-05 46.0004V227.363L171 287V105.638L9.15527e-05 46.0004ZM3.00009 50.2238V225.232L168 282.777V107.769L3.00009 50.2238Z" stroke={"black"}/>
            <motion.path style={PathStyle}
            fill-rule="evenodd" clip-rule="evenodd" d="M342 46.0004V227.363L171 287V105.638L342 46.0004ZM339 50.2238V225.232L174 282.777V107.769L339 50.2238Z" stroke={"black"}/>
            <motion.path style={PathStyle}
            fill-rule="evenodd" clip-rule="evenodd" d="M0 46.0004L171.849 107L342 46.0004L171.849 0L0 46.0004ZM10.1005 46.4023L171.844 103.815L331.99 46.4019L171.845 3.10665L10.1005 46.4023Z" stroke={"black"}/>
            <motion.path style={PathStyle}
            fill-rule="evenodd" clip-rule="evenodd" d="M107.959 17.5723L274 70.9067V150.5H271V73.0941L107.041 20.4285L107.959 17.5723Z" stroke={"black"}/>
        </svg>
        <motion.svg width="342" height="287" viewBox="0 0 342 287" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'
            style={{
                opacity: useTransform(smooth, [k(57.5), k(37.5)], [0, 1])
            }}
        >
            <path d="M9.15527e-05 46.0004L171 105.638V287L9.15527e-05 227.363V46.0004Z" fill="#CFA15C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.15527e-05 46.0004V227.363L171 287V105.638L9.15527e-05 46.0004ZM3.00009 50.2238V225.232L168 282.777V107.769L3.00009 50.2238Z" fill="black"/>
            <path d="M342 46.0004L171 105.638V287L342 227.363V46.0004Z" fill="#935B1A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M342 46.0004V227.363L171 287V105.638L342 46.0004ZM339 50.2238V225.232L174 282.777V107.769L339 50.2238Z" fill="black"/>
            <path d="M0 46.0004L171.849 0L342 46.0004L171.849 107L0 46.0004Z" fill="#FFD79C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 46.0004L171.849 107L342 46.0004L171.849 0L0 46.0004ZM10.1005 46.4023L171.844 103.815L331.99 46.4019L171.845 3.10665L10.1005 46.4023Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M107.959 17.5723L274 70.9067V150.5H271V73.0941L107.041 20.4285L107.959 17.5723Z" fill="black"/>
        </motion.svg>
    </>
  )
}

export default BoxC