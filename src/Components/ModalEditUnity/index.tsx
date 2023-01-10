import React, { useContext } from 'react'
import { UserContext } from '../../Providers/UserContext'

export const index = () => {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div>
        <form>

        </form>

    </div>
  )
}


// {
//     "userId":5,
//     "nome_fantasia": "teste1",
//     "codigo_cep_estabelecimento": "1345135135",
//     "endereco_estabelecimento": "AV CAMPOS SALES",
//     "numero_estabelecimento": "6",
//     "bairro_estabelecimento": "CENTRO",
//     "numero_telefone_estabelecimento": "(34)34343434",
//     "descricao_turno_atendimento": "aaaaaaaaa"
//     }