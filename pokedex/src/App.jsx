import { Header } from "./components/Header/Header"
import { PokemonListPage } from "./page/PokemonListPage/PokemonListPage"
import { PokedexPage } from "./page/PokedexPage/PokedexPage"
import { PokemonDetailPage } from "./page/PokemonDetailPage/PokemonDetailPage"
import { Router } from "./router/Router"
import { GlobalStyle } from "./GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
