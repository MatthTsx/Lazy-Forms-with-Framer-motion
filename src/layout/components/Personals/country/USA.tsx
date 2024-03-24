import React from 'react'

function USA() {
  return (
    <div className='h-full w-full items-center flex flex-col relative justify-between bg-white'>
        <div className='absolute bg-blue-700 w-[35.5%] aspect-[1.5] left-0'/>
        {[...Array(4)].map(a => <div key={a} className='w-full h-6 bg-red-500'/>)}
    </div>
  )
}

export default USA