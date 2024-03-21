import React from 'react'
import Input from './Input'

function Docs() {
  return (
    <>
        <h2 className='font-custom1 text-xl font-bold pt-8'>Documentos</h2>
        <Input label_text='RG' name='d_rg' type='text' placeholder='' required={false}/>
        <Input label_text='Orgão de Expedição' name='d_or' type='text' placeholder='' required={false}/>
        <Input label_text='Data de Expedição' name='d_dt' type='text' placeholder='' required={false}/>
        <Input label_text='CPF' name='d_cpf' type='text' placeholder='' required={true}/>
    </>
  )
}

export default Docs