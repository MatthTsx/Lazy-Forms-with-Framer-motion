import { CommonPropsForScreen } from '@/utils/types'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import React from 'react'


const pathVariables = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
        }
    }
}

interface Props extends CommonPropsForScreen{
    scale: number
}

function Car({...p}: Props) {
    const scrl = useScroll().scrollYProgress
    const smooth = useSpring(scrl, {bounce: 0})
    const k = (i:number) => (p.i-i/100)/p.end

    const PathStyle = {
        pathLength: useTransform(smooth, [k(90), k(50)], [0, 1])
    }

  return (
    <>
        <motion.svg width={`${20*p.scale}%`} height={`${50*p.scale}%`} viewBox="0 0 98 56" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={"black"}
            className={"absolute z-10"}
            style={{
                opacity: useTransform(smooth, [k(37.5), k(27.5)], [1, 0])
            }}
        >
            <motion.path
                style={PathStyle}
                fill-rule="evenodd" clip-rule="evenodd" d="M22.773 54.0295C27.52 54.0295 31.3682 50.1812 31.3682 45.4342C31.3682 40.6872 27.52 36.839 22.773 36.839C18.026 36.839 14.1777 40.6872 14.1777 45.4342C14.1777 50.1812 18.026 54.0295 22.773 54.0295ZM22.773 55.0295C28.0723 55.0295 32.3682 50.7335 32.3682 45.4342C32.3682 40.1349 28.0723 35.839 22.773 35.839C17.4737 35.839 13.1777 40.1349 13.1777 45.4342C13.1777 50.7335 17.4737 55.0295 22.773 55.0295Z" stroke={"black"}
                />
            <motion.path
                style={PathStyle}
                fill-rule="evenodd" clip-rule="evenodd" d="M66.9109 54.0295C71.6579 54.0295 75.5061 50.1813 75.5061 45.4343C75.5061 40.6873 71.6579 36.8391 66.9109 36.8391C62.1639 36.8391 58.3157 40.6873 58.3157 45.4343C58.3157 50.1813 62.1639 54.0295 66.9109 54.0295ZM66.9109 55.0295C72.2102 55.0295 76.5061 50.7336 76.5061 45.4343C76.5061 40.135 72.2102 35.8391 66.9109 35.8391C61.6116 35.8391 57.3157 40.135 57.3157 45.4343C57.3157 50.7336 61.6116 55.0295 66.9109 55.0295Z" stroke={"black"}
                />
            <motion.path
                style={PathStyle}
                fill-rule="evenodd" clip-rule="evenodd" d="M72.668 54.0295C77.415 54.0295 81.2632 50.1813 81.2632 45.4343C81.2632 40.6873 77.415 36.8391 72.668 36.8391C67.921 36.8391 64.0728 40.6873 64.0728 45.4343C64.0728 50.1813 67.921 54.0295 72.668 54.0295ZM72.668 55.0295C77.9673 55.0295 82.2632 50.7336 82.2632 45.4343C82.2632 40.135 77.9673 35.8391 72.668 35.8391C67.3687 35.8391 63.0728 40.135 63.0728 45.4343C63.0728 50.7336 67.3687 55.0295 72.668 55.0295Z" stroke={"black"}
                />
            <motion.path
                style={PathStyle}
                fill-rule="evenodd" clip-rule="evenodd" d="M28.53 54.0295C33.2771 54.0295 37.1253 50.1812 37.1253 45.4342C37.1253 40.6872 33.2771 36.839 28.53 36.839C23.783 36.839 19.9348 40.6872 19.9348 45.4342C19.9348 50.1812 23.783 54.0295 28.53 54.0295ZM28.53 55.0295C33.8294 55.0295 38.1253 50.7335 38.1253 45.4342C38.1253 40.1349 33.8294 35.839 28.53 35.839C23.2307 35.839 18.9348 40.1349 18.9348 45.4342C18.9348 50.7335 23.2307 55.0295 28.53 55.0295Z" stroke={"black"}
                />
            <motion.path
                style={PathStyle}
                fill-rule="evenodd" clip-rule="evenodd" d="M60.4861 1.52856H11.8958C6.3729 1.52856 1.89575 6.0057 1.89575 11.5285V34.4343C1.89575 39.9571 6.3729 44.4343 11.8957 44.4343H86.2319C91.7548 44.4343 96.2319 39.9571 96.2319 34.4343V28.8404C96.2319 25.5109 94.5748 22.3998 91.8119 20.542L66.0661 3.23014C64.4166 2.12097 62.4739 1.52856 60.4861 1.52856ZM11.8958 0.528564C5.82062 0.528564 0.895752 5.45342 0.895752 11.5285V34.4343C0.895752 40.5094 5.82062 45.4343 11.8957 45.4343H86.2319C92.307 45.4343 97.2319 40.5094 97.2319 34.4343V28.8404C97.2319 25.178 95.4091 21.7557 92.3699 19.7121L66.6241 2.4003C64.8096 1.18021 62.6727 0.528564 60.4861 0.528564H11.8958Z" stroke={"black"}
                />
        </motion.svg>
        <motion.svg width={`${20*p.scale}%`} height={`${50*p.scale}%`} viewBox="0 0 97 55" fill="none" xmlns="http://www.w3.org/2000/svg"
            className='absolute'
            style={{
                opacity: useTransform(smooth, [k(57.5), k(37.5)], [0, 1])
            }}
        >
            <path d="M31.4724 44.9057C31.4724 50.205 27.1765 54.5009 21.8772 54.5009C16.5779 54.5009 12.2819 50.205 12.2819 44.9057C12.2819 39.6064 16.5779 35.3104 21.8772 35.3104C27.1765 35.3104 31.4724 39.6064 31.4724 44.9057Z" fill="black"/>
            <path d="M75.6105 44.9057C75.6105 50.205 71.3145 54.5009 66.0152 54.5009C60.7159 54.5009 56.42 50.205 56.42 44.9057C56.42 39.6064 60.7159 35.3104 66.0152 35.3104C71.3145 35.3104 75.6105 39.6064 75.6105 44.9057Z" fill="black"/>
            <path d="M81.3676 44.9057C81.3676 50.205 77.0717 54.5009 71.7724 54.5009C66.4731 54.5009 62.1771 50.205 62.1771 44.9057C62.1771 39.6064 66.4731 35.3104 71.7724 35.3104C77.0717 35.3104 81.3676 39.6064 81.3676 44.9057Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M37.2295 44.9057C37.2295 50.205 32.9336 54.5009 27.6343 54.5009C22.335 54.5009 18.0391 50.205 18.0391 44.9057C18.0391 39.6064 22.335 35.3104 27.6343 35.3104C32.9336 35.3104 37.2295 39.6064 37.2295 44.9057Z" fill="url(#paint1_linear_0_1)"/>
            <path d="M0 11C0 4.92485 4.92487 0 11 0H59.5904C61.7769 0 63.9138 0.651644 65.7283 1.87173L91.4741 19.1836C94.5134 21.2272 96.3362 24.6494 96.3362 28.3118V33.9057C96.3362 39.9808 91.4113 44.9057 85.3362 44.9057H11C4.92487 44.9057 0 39.9808 0 33.9057V11Z" fill="url(#paint2_linear_0_1)"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="71.7724" y1="35.3104" x2="71.7724" y2="54.5009" gradientUnits="userSpaceOnUse">
            <stop offset="0.605" stop-color="#FFBE53"/>
            <stop offset="1" stop-color="#FFF75A"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="27.6343" y1="35.3104" x2="27.6343" y2="54.5009" gradientUnits="userSpaceOnUse">
            <stop offset="0.54" stop-color="#FFBD53"/>
            <stop offset="1" stop-color="#FFF659"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="48.1681" y1="0" x2="48.1681" y2="44.9057" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF859"/>
            <stop offset="1" stop-color="#FFBA52"/>
            </linearGradient>
            </defs>
        </motion.svg>
    </>
  )
}

export default Car