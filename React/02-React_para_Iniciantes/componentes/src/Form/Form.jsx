import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const arr = ['item 1', 'item 2', 'item 3']
  return (
    <form action="">
      <div>
        <label htmlFor="nome">Nome: </label>
        <Input />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input />
      </div>
      <Button itens={arr}/>
    </form>
  );
};

export default Form;
