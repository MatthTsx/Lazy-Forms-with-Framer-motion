import React from 'react'

function E_Mom() {
  return (
    <div className='w-48 h-48 flex items-center justify-center relative'>
            <div className='w-48 h-48 rounded-full bg-gradient-to-b from-[#EE0000]/25 to-[#FF9E67] from-20% via-10% absolute'/>
            <div className='w-[187px] h-[187px] rounded-full absolute top-[5px] Emoji_2_Gradient'/>
            <div className='absolute w-full h-4 px-10 flex justify-between bottom-20 left-[1.1rem]'>
                <div className='bg-[#F04646] origin-bottom-left w-[34px] h-[48px] rounded-[45px] rotate-[-45deg]'/>
                <div className='bg-[#F04646] origin-bottom-left w-[34px] h-[48px] rounded-[45px] rotate-[-45deg]'/>
            </div>
            <div className='absolute w-full h-4 px-10 flex justify-between bottom-20 right-[1.1rem]'>
                <div className='bg-[#F04646] origin-bottom-right w-[34px] h-[48px] rounded-[45px] rotate-[45deg] relative'/>
                <div className='bg-[#F04646] origin-bottom-right w-[34px] h-[48px] rounded-[45px] rotate-[45deg] relative'/>
            </div>
    </div>
  )
}

export default E_Mom