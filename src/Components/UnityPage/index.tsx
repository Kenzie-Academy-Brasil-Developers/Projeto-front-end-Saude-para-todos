import React, { useContext } from 'react'
import { UnitiesContext } from '../../Providers/unitiesContext'

export const UnityPage = () => {

  const {allUnities, setAllUnities} = useContext(UnitiesContext)
  setAllUnities([
  {nome_fantasia: "haah",
  codigo_cep_estabelecimento: 787359656,
  endereco_estabelecimento: "serg",
  numero_estabelecimento: 564,
  bairro_estabelecimento: "asfd",
  numero_telefone_estabelecimento: 56464},
  ])

  return (
    <div>
        <img src="" alt="" />
        <p>{allUnities.nome_fantasia}</p>
        <p>{allUnities.codigo_cep_estabelecimento}</p>
        <p>{allUnities.endereco_estabelecimento + allUnities.numero_estabelecimento}</p>
        <p>{allUnities.bairro_estabelecimento}</p>
        <p>{allUnities.numero_telefone_estabelecimento}</p>
        <p>{allUnities}</p>
        <p>link?</p>
    </div>
  )
}
