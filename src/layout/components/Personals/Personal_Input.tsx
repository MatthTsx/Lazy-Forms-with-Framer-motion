import React from 'react'
import E_Normal from './emojis/E_Normal'
import E_Mom from './emojis/E_mom'
import E_Dad from './emojis/E_dad'
import E_Nerd from './emojis/E_Nerd'
import { _Data_ } from '@/utils/types'

enum Input_Type {
  YOU, MOM, DAD, NERD
}

interface props{
  inputType: Input_Type,
  setData: React.Dispatch<React.SetStateAction<_Data_>>
}
function Personal_Input({...p}: props) {
  return (
    <div className={`w-[325px] h-[503px] relative rounded-[27px] flex flex-col items-center py-8 gap-y-[40px] drop-shadow-[4px] shadow-lg shadow-red-500/20`}>
      <div className='w-full h-full bg-gradient-to-t from-[rgba(255,122,0,1)] to-[rgba(0,0,0,0.05)] rounded-[27px] opacity-20 absolute pointer-events-none top-0'/>
      {tittle(p.inputType)}
      {Emoji(p.inputType)}
      <div className='flex w-[270px] flex-col gap-y-[20px]'>
        {labels_inputs(p.inputType, p.setData)}
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

function labels_inputs(p: Input_Type, setData: React.Dispatch<React.SetStateAction<_Data_>>){
  return <>
    <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>{p == 3 ? "College" : "Name"}: </label>
      <input type="text" className='input_Personal' onChange={e => setData(d => ({...d,
        Name: p == 0 ? e.target.value : d.Name,
        M_Name: p == 1 ? e.target.value : d.M_Name,
        D_Name: p == 2 ? e.target.value : d.D_Name,
        College: p == 3? e.target.value : d.College
      }))}/>
    </div>
    {p == 0 && <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>Email: </label>
      <input type="text" className='input_Personal' onChange={e => setData(d => ({...d, Email: e.target.value}))}/>
    </div>}
    {p == 3 && <div className='div-inputs-Personal1'>
      <label className='label_Personal-1'>Course: </label>
      <input type="text" className='input_Personal' onChange={e => setData(d => ({...d, Course: e.target.value}))}/>
    </div>}
    <div className='w-[270px] h-[28px] bg-black/20 input_Personal'/>
    {(p == 2 || p == 1) && 
    <div className='w-[270px] h-[28px] bg-black/20 input_Personal'/>
    }
  </>
}

export default Personal_Input