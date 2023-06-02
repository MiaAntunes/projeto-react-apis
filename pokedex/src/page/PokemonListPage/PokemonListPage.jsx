import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";

export const PokemonListPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Todos os Pokémons</h1>
        <section>
          {/* ! AQUI VAI O MAP DOS POKEMONS E DENTRO O COMPONENTE POKEMONCARD */}
          <PokemonCard/>
        </section>
      </main>
      <Footer/>
    </>
  );
};
