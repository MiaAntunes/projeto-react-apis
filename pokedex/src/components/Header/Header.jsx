import { useNavigate } from "react-router-dom"
import { goToPageMain, goToPokedex } from "../../router/coordinator"
import  logo  from "../../assets/Logo.png"
import { HeaderContainer, ButtonListPokemon, Logo, ButtonPokedex } from "./HeaderStyle"


export const Header = (props) =>{
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <ButtonListPokemon style={{display:props.homeFirstButtonDisplay}} onClick={()=>{goToPageMain(navigate)}}>Todos Pokémons</ButtonListPokemon>
            <Logo src={logo} alt="Logo do Pokémon" /> 

            <ButtonPokedex style={{backgroundColor:props.background, display:props.pokedexSecondButtonDisplay}} onClick={()=>{goToPokedex(navigate)}}>{props.buttonTitle}</ButtonPokedex>
            {/* <button>Excluir da Pokedéx</button> */}
        </HeaderContainer>
    )
}
