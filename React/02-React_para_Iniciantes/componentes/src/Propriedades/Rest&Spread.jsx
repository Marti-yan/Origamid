import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'

const RestSpread = () => {
  return (
    <div style={{backgroundColor: 'blueviolet', opacity: 0.9, width: '60%'}}>
      <Input id="email" label="Email: " required/>
      <Input type="password" id="senha" label="Senha: " />
      <Button />
    </div>
  )
}

export default RestSpread