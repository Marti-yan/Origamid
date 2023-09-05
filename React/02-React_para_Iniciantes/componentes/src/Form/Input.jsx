import React from 'react';

const Input = ({label, id, ...props}) => {
  return (
    <div style={{margin: '0.8rem 0'}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} style={{width: '90%'}}/>
    </div>
  );
};

export default Input;
