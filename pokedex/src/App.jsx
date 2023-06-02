import { Header } from "./components/Header/Header"
import { PokemonListPage } from "./page/PokemonListPage/PokemonListPage"
import { PokedexPage } from "./page/PokedexPage/PokedexPage"
import { PokemonDetailPage } from "./page/PokemonDetailPage/PokemonDetailPage"

function App() {
  return (
    <>
      <Header/>
      <PokemonListPage/>
      <PokedexPage />
      <PokemonDetailPage/>
    </>
  )
}

export default App
