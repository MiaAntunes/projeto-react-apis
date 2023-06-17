import { useNavigate } from "react-router-dom";
import { goToPageMain, goToPokedex } from "../../router/coordinator";
import logo from "../../assets/Logo.png";
import {
  HeaderContainer,
  ButtonListPokemon,
  Logo,
  ButtonPokedex,
} from "./HeaderStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const Header = (props) => {
  const context = useContext(GlobalContext);
  const { myPokedex, deletePokemonPokedexPage, catchPokemon } = context;
  const navigate = useNavigate();
  const findPokemon = myPokedex.find((pokemon) => {
    return pokemon.id === props.pokemon.id;
  });
  // console.log(props)
  console.log(findPokemon);
  return (
    <HeaderContainer>
      {location.pathname.includes("pokedex") ||
      location.pathname.includes("detail") ? (
        <ButtonListPokemon
          onClick={() => {
            goToPageMain(navigate);
          }}
        >
          Todos os Pokemons
        </ButtonListPokemon>
      ) : (
        <ButtonPokedex
          style={{
            backgroundColor: "blue",
            color: props.buttonColor,
          }}
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          Pokedex
        </ButtonPokedex>
      )}

      <Logo src={logo} alt="Logo do Pokémon" />

      {location.pathname.includes("detail") &&
        (!findPokemon ? (
          <ButtonPokedex
            style={{
              backgroundColor: "blue",
              color: props.buttonColor,
            }}
            onClick={() => catchPokemon(props.pokemon.id)}
          >
           Adicionar a Pokedex
          </ButtonPokedex>
        ) : (
          <ButtonPokedex
            style={{
              backgroundColor: "red",
              color: props.buttonColor,
            }}
            onClick={() => deletePokemonPokedexPage(props.pokemon.id)}
          >
            Remover da Pokedex
          </ButtonPokedex>
        ))
        //só vai acontecer quand estiver na página DETAIL!!!!!!!
        }
    </HeaderContainer>
  );
};
