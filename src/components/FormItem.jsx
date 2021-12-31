import React from 'react';

const FormItem = (props) => {
  const {label, type, id, name, placeholder} = props;
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormItem;
