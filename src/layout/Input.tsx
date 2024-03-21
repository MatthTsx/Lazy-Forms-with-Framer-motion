import React from 'react'

interface props{
    type: string
    name: string
    label_text: string
    placeholder: string
    required: boolean
}

function Input({...p} : props) {
  return (
    <div className='flex flex-row items-center justify-between w-[60%]'>
        <label htmlFor={p.name} className='font-custom1 text-[1.3em]' style={{
            color: p.required ? '#ff5e84' : "black"
        }}>{p.label_text}: </label>
        <input name={p.name} type={p.type} placeholder={p.placeholder} className='outline-none px-2' required={p.required}/>
    </div>
  )
}

export default Input