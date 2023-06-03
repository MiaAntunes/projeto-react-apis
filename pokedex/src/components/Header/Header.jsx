import { useNavigate } from "react-router-dom"
import { goToPageMain, goToPokedex } from "../../router/coordinator"


export const Header = () =>{
    const navigate = useNavigate()
    return(
        <header>
            <img src="#" alt="Logo do Pokémon" />
            <button onClick={()=>{goToPokedex(navigate)}}>Pokédex</button> 
            <button onClick={()=>{goToPageMain(navigate)}}>Todos Pokémons</button>
            {/* <button>Excluir da Pokedéx</button> */}
        </header>
    )
}