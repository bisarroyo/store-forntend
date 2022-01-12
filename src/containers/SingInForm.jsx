import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button } from '@material-ui/core'
import axios from 'axios';

import LoginFormStyle from '@styles/LoginFormStyle'

const SingInForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:3000/api/user/singin', data)
  }
  return (
    <LoginFormStyle>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="post" >
      <TextField  
        {...register(
          "email",
          {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
          })
        } 
        variant="standard"
        label="Correo electrónico"
      />
      <span className="field-error">
        {errors.email && 'Debe ingresar un correo electrónico válido'}
      </span>
      <TextField {...register(
        "password",
        { required: true, minLength: 8})}
        variant="standard"
        label="Contraseña"
        type="password"
      />
      <span className="field-error">
        {errors.password && errors.password.type === 'required' && 'Debe anotar su contaseña'}
      </span>
      <span className="field-error">
        {errors.password && errors.password.type === 'minLength' && 'Su contraseña debe ser de al menos 8 caracteres'}
      </span>
      <Button
        variant="contained"
        type="submit"
      >
        Ingresar
      </Button>
    </form>
    </LoginFormStyle>
  )
}

export default SingInForm;
