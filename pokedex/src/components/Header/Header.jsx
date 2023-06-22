import { useNavigate } from "react-router-dom";
import { goToPageMain, goToPokedex } from "../../router/coordinator";
import logo from "../../assets/Logo.png";
import {
  HeaderContainer,
  ButtonListPokemon,
  Logo,
  ButtonPokedex,
  ButtonDetail
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
          backgroundColor="#33A4F5"
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
          <ButtonDetail
            backgroundColor="#33A4F5"
            onClick={() => catchPokemon(props.pokemon.id)}
          >
           Adicionar a Pokedex
          </ButtonDetail>
        ) : (
          <ButtonDetail
            backgroundColor="#FF6262"
            onClick={() => deletePokemonPokedexPage(props.pokemon.id)}
          >
            Remover da Pokedex
          </ButtonDetail>
        ))
        }
    </HeaderContainer>
  );
};
