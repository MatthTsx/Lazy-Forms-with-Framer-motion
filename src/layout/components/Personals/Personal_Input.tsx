import React from 'react'
import E_Normal from './emojis/E_Normal'
import E_Mom from './emojis/E_mom'
import E_Dad from './emojis/E_dad'
import E_Nerd from './emojis/E_Nerd'

enum Input_Type {
  YOU, MOM, DAD, NERD
}

interface props{
  inputType: Input_Type
}
function Personal_Input({...p}: props) {
  return (
    <div className={`w-[325px] h-[503px] relative rounded-[27px] flex flex-col items-center py-8 gap-y-[40px] drop-shadow-[4px] shadow-lg shadow-red-500/20`}>
      <div className='w-full h-full bg-gradient-to-t from-[rgba(255,122,0,1)] to-[rgba(0,0,0,0.05)] rounded-[27px] opacity-20 absolute pointer-events-none top-0'/>
      {tittle(p.inputType)}
      {Emoji(p.inputType)}
      <div className='flex w-[270px] flex-col gap-y-[20px]'>
        {labels_inputs(p.inputType)}
      </div>
    </div>
  )
}

function Emoji(p: Input_Type){
  if(p == 0) return <E_Normal/>
  if(p == 1) return <E_Mom/>
  if(p == 2) return <E_Dad/>
  return <E_Nerd/>
}

function tittle(p: Input_Type){
  return <p className='text-[24px] font-Lemon'>
    {p == 0 ? "Who r you?"
    : p == 1? "hb your mom?"
    : p == 2? "hb your dad?"
    : "Who r you?"}
  </p>
}

function labels_inputs(p: Input_Type){
  return <>
    <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>{p == 3 ? "College" : "Name"}: </label>
      <input type="text" className='input_Personal'/>
    </div>
    {p == 0 && <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>Email: </label>
      <input type="text" className='input_Personal'/>
    </div>}
    {p == 3 && <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>Course: </label>
      <input type="text" className='input_Personal'/>
    </div>}
    <div className='w-[270px] h-[28px] bg-black/20 input_Personal'/>
    {(p == 2 || p == 1) && 
    <div className='w-[270px] h-[28px] bg-black/20 input_Personal'/>
    }
  </>
}

export default Personal_Input