import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokedexPageStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { myPokedex, detailPokemon } = context;

  return (
    <>
      <Header pokemon={detailPokemon} pokedexSecondButtonDisplay="none" buttonTitle="Pokedex" />
      <MainContainer>
        <Title>Meus Pokémons</Title>
        <SectionPokemon>
          {myPokedex.map((pokemon, index) => {
            return (
              <PokemonCard
                buttonBackgroundColor="red"
                buttonColor="#fff"
                pokemon={pokemon}
                key={index}
                elementoType={pokemon.types}
              />
            );
          })}
        </SectionPokemon>
      </MainContainer>
      <Footer />
    </>
  );
};
