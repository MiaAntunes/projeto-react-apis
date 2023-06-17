import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PokemonListPage } from "../page/PokemonListPage/PokemonListPage"
import { PokemonDetailPage } from "../page/PokemonDetailPage/PokemonDetailPage"
import { PokedexPage } from "../page/PokedexPage/PokedexPage"


export const Router = () =>{
    return(
        <BrowserRouter>
           <Routes>
                <Route path="/home" element={ <PokemonListPage/> }/>
                <Route path="/pokedex" element={ <PokedexPage/> }/>
                <Route path="/detail-pokemon/:name" element={ <PokemonDetailPage/> }/>
           </Routes>
        </BrowserRouter>
    )
}