import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button } from '@material-ui/core'

import LoginFormStyle from '@styles/LoginFormStyle'

const LogInForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(errors);
  const onSubmit = data => console.log(data)
  return (
    <LoginFormStyle>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} action="get">
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
      {errors.email ? <span className="field-error">Debe ingresar un correo electrónico válido</span> : <span></span>}
      <TextField {...register(
        "password",
        { required: true, minLength: 8})}
        variant="standard"
        label="Contraseña"
        type="password"
      />
      {errors.password ? <span className="field-error">Debe anotar su contaseña</span> : <span></span>}
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

export default LogInForm;
