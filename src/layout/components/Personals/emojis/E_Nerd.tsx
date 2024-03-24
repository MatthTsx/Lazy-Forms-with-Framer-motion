import React from 'react'

function E_Nerd() {
  return (
    <div className='w-48 h-48 flex items-center justify-center relative'>
            <div className='w-48 h-48 rounded-full bg-gradient-to-b from-Emoji-yellow-1 to-Emoji-yellow-2 from-20% via-10% absolute'/>
            <div className='w-[187px] h-[187px] rounded-full bg-yellow-400 absolute top-[5px] Emoji_1_Gradient'/>
            <div className='absolute w-full h-16 flex justify-between top-16 items-center'>
                <div className='w-[196px] h-2 bg-Emoji-brown rounded-full'/>
                <div className='h-full w-full absolute px-5 flex justify-between'>
                    {Eye(true)}
                    {Eye(false)}
                </div>
                <div className='absolute w-full h-full flex items-center justify-center top-12'>
                    <div className='w-16 h-8 bg-gradient-to-t from-[#FF3F3F] to-[#FF8F8F] rounded-b-full'/>
                    <div className='w-6 h-3 absolute top-0 translate-y-[133%] rounded-b-md bg-gradient-to-r from-[#D0D0D0] to-[#D0D0D0] via-white'/>
                </div>
            </div>
            <div className='absolute items-center justify-center flex top-0 w-auto h-auto'>
                <div className='w-32 h-12 bg-[#1B1000] rounded-[17px]'/>
                <div className='bg-gradient-to-t from-[#FFB800] to-[#FF8743] w-[13px] h-16 absolute rounded-full right-4'/>
                <div className='clip-path-E-hat h-48 aspect-square top-0 absolute translate-y-[-65%] Emoji_4_Gradient'/>
            </div>
    </div>
  )
}

function Eye(left: boolean){
    return <div className='h-[63px] aspect-square rounded-full border-[3px] border-Emoji-brown Emoji_3_Gradient flex items-center justify-center'>
        <div className={`w-9 aspect-square rounded-full bg-Emoji-brown relative top-1.5 ${left ? "-right-1.5" : "right-1.5"}`}/>
    </div>
}

export default E_Nerd