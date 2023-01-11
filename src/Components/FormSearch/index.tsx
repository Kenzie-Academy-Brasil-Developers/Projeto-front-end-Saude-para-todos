import { SyntheticEvent, useContext, useState } from "react"
import { UnitiesContext } from "../../Providers/unitiesContext"
import { StyledSearchHome } from "./style"

export const FormSearch = () =>{
    const { setSearch} = useContext(UnitiesContext)
    const [searchInput, setSearchInput] = useState("")
    const submitSearch = (event: SyntheticEvent) =>{
        event.preventDefault()
        setSearch(searchInput)
    }
    return(
        <StyledSearchHome>
            <form onSubmit={submitSearch}>
                <input type="number" placeholder="Digite um Cep para pesquisa" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <button>Pesquisar</button>
            </form>
        </StyledSearchHome>
    )
}

