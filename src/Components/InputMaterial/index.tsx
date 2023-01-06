import React from 'react'
import { iInputProps } from './@types';
import { TextField } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/system';

const theme = createTheme ({
  palette: {
    primary: {
      main: "#27AE60",
    },

    error: {
      main: "#EB5757",
    },

    success: {
      main: "#27AE60",
    },

  },

})

const InputMaterial = ({ type, id, placeholder, autoComplete, disabled, register, error, success }: iInputProps) => {
  return (

    <fieldset> 
      <ThemeProvider theme = {theme}>
        <TextField error={error} 
          fullWidth  variant="standard" label={placeholder} type={type} id={id}
          autoComplete={autoComplete} {...register} disabled={disabled}
        />
      </ThemeProvider>
    </fieldset>    
  )
}

export default InputMaterial