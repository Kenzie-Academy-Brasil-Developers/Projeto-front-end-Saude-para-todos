import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputMaterial from '../../Components/InputMaterial'
import { iRegisterFormValues } from './interfaceRegister' 
import { yupResolver} from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema' 
import { UserContext } from '../../Providers/UserContext'
import { StyledButton, StyledLink } from '../../styles/buttons-style' 
import { StyledRegister } from './register-style'


export const RegisterPage = () => {

  const [loading, setLoading] = useState(false)  
  const { register, handleSubmit, formState: {errors}, reset } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  })  
  const { userRegister } = useContext(UserContext)

  const submit: SubmitHandler<iRegisterFormValues> = async (formData) => {
    userRegister(formData, setLoading)
    reset()
  }
  
  return (

    <StyledRegister>

      <div className='content'>

        <div className='content-header'>
          <h1>Cadastro</h1>
          <StyledLink className="grey-Link" to={"/"}>Retornar para o login</StyledLink>
        </div>

        <div>

          <form noValidate onSubmit={handleSubmit(submit)}>
           
            <InputMaterial type="text" id="name" label="Nome " error={errors.name} placeholder="Nome" register={register("name")} disabled={loading}/>
            {errors.name && <p className="p-error" aria-label="Error: Name">{errors.name.message}</p>}
        
            <InputMaterial type="text" label='Email' id="email" error={errors.email} placeholder='E-mail' register={register("email")} disabled={loading} />
            {errors.email && <p className="p-error" aria-label="Error: E-mail">{errors.email.message}</p>}
           
            <InputMaterial type="password" label='Senha' id={'password'} error={errors.password} placeholder='Senha' register={register("password")} disabled={loading}/>
            {errors.password && <p className="p-error" aria-label="Error: Password">{errors.password.message}</p>}
                   
            <InputMaterial type="password" error={errors.passwordConfirm} id="passwordConfirm" label="Confirme sua senha " placeholder="Confirme aqui a sua senha" register={register("passwordConfirm")} disabled={loading} />
            {errors.passwordConfirm && <p className="p-error" aria-label="Error: Password Confirmation">{errors.passwordConfirm.message}</p>}
                   
            <InputMaterial type="text" error={errors.city} id="city" label="Confirme a sua Cidade " placeholder="Cidade" register={register("city")} disabled={loading} />
            {errors.city && <p className="p-error" aria-label="Error: City Confirmation">{errors.city.message}</p>}

            <InputMaterial type="text" error={errors.state} id="state" label="Confirme o seu Estado " placeholder="Estado" register={register("state")} disabled={loading} />
            {errors.state && <p className="p-error" aria-label="Error: State Confirmation">{errors.state.message}</p>}

            <InputMaterial type="text" error={errors.image} id="image" label="Insira o link para a sua imagem de perfil" placeholder="Imagem" register={register("image")} disabled={loading} />
            {errors.image && <p className="p-error" aria-label="Error: Image Confirmation">{errors.image.message}</p>}

            <InputMaterial type="text" error={errors.zipCode} id="zipCode" label="Confirme o seu CEP" placeholder="CEP" register={register("zipCode")} disabled={loading} />
            {errors.zipCode && <p className="p-error" aria-label="Error: Zip code Confirmation">{errors.zipCode.message}</p>}

            <StyledButton className="green-button-default" type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Cadastrar'}
            </StyledButton>
        
          </form>

        </div>

      </div>

    </StyledRegister> 

  )
}