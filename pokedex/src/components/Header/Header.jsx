import { useNavigate } from "react-router-dom"
import { goToPageMain, goToPokedex } from "../../router/coordinator"
import  logo  from "../../assets/Logo.png"
import { HeaderContainer, ButtonListPokemon, Logo, ButtonPokedex } from "./HeaderStyle"


export const Header = () =>{
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <ButtonListPokemon onClick={()=>{goToPageMain(navigate)}}>Todos Pokémons</ButtonListPokemon>
            <Logo src={logo} alt="Logo do Pokémon" /> 
            <ButtonPokedex onClick={()=>{goToPokedex(navigate)}}>Pokédex</ButtonPokedex>
            {/* <button>Excluir da Pokedéx</button> */}
        </HeaderContainer>
    )
}