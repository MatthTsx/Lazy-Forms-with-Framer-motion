import React from 'react'
import Input from './Input'

function Pessoal() {
  return (
    <>
        <h2 className='font-custom1 font-bold text-xl'>Dados Pessoais</h2>
        <Input type="text" name="p_name" required={true} placeholder='' label_text='Nome'/>
        <Input type="text" name="p_email" required={true} placeholder='' label_text='Email'/>
        <Input type="text" name="p_mom_name" required={false} placeholder='' label_text='Nome da mãe'/>
        <Input type="text" name="p_dad_name" required={false} placeholder='' label_text='Nome do pai'/>
        <div className='flex flex-rol gap-12'>
            <Input type="text" name="p_unir" required={true} placeholder='' label_text='Universidade'/>
            <Input type="text" name="p_cur" required={true} placeholder='' label_text='Curso'/>
        </div>
        <select name="p_nac">
            <option value="Brasileiro">Brasileiro</option>
            <option value="Baiano">Baiano</option>
            <option value="Bota Foguense">Bota foguense</option>
        </select>
    </>
  )
}

export default Pessoal