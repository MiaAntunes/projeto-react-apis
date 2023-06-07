import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokemonListPageStyle";

export const PokemonListPage = () => {
  // ! Falta esconder o todos os pokemons quando tiver nessa págiba
  return (
    <>
      <Header homeFirstButtonDisplay="none" buttonTitle="Pokedex" background="#33A4F5" />
      <MainContainer>
        <Title>Todos os Pokémons</Title>
        <SectionPokemon>
          {/* ! AQUI VAI O MAP DOS POKEMONS E DENTRO O COMPONENTE POKEMONCARD */}
          <PokemonCard buttonTitle="Capturar" buttonBackgroundColor="#fff" buttonColor="black"  />
        </SectionPokemon>
      </MainContainer>
      <Footer/>
    </>
  );
};
