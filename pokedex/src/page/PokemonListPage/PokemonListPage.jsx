import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokemonListPageStyle";

export const PokemonListPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Todos os Pokémons</Title>
        <SectionPokemon>
          {/* ! AQUI VAI O MAP DOS POKEMONS E DENTRO O COMPONENTE POKEMONCARD */}
          <PokemonCard/>
        </SectionPokemon>
      </MainContainer>
      <Footer/>
    </>
  );
};
