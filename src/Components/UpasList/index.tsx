import { useContext } from "react"
import { UnitiesContext } from "../../Providers/unitiesContext"
import { CardUpas, iCardUpas } from "./CardUpas"

export const UpasList = () =>{
    const{listUpas} = useContext(UnitiesContext)
    return(
        <ul>
            {
                listUpas.map((upa:iCardUpas) =>{
                    return(
                        <CardUpas
                        key={upa.codigo_cep_estabelecimento}
                        nome_fantasia={upa.nome_fantasia}
                        codigo_cep_estabelecimento={upa.codigo_cep_estabelecimento}
                        endereco_estabelecimento={upa.endereco_estabelecimento}
                        numero_estabelecimento={upa.numero_estabelecimento}
                        bairro_estabelecimento={upa.bairro_estabelecimento}
                        numero_telefone_estabelecimento={upa.numero_telefone_estabelecimento}
                        />
                    )
                
                })
            }
        </ul>
    )

}
