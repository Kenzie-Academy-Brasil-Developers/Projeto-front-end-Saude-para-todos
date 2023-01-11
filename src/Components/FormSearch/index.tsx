import { useContext } from "react"
import { UnitiesContext } from "../../Providers/unitiesContext"
import { StyledSearchHome } from "./style"

export const FormSearch = () =>{
    const {search, setSearch, searchUnities} = useContext(UnitiesContext)
    return(
        <StyledSearchHome>
            <form onSubmit={searchUnities}>
                <input type="number" placeholder="Digite um Cep para pesquisa" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button>Pesquisar</button>
            </form>
        </StyledSearchHome>
    )
}

