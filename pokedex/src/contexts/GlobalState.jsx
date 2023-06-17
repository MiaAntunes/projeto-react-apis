import { useState } from "react"
import { GlobalContext } from "./GlobalContext";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) =>{
    const [myPokedex, setMyPokedex] = useState([])
    const [eachPokemon, setEachPokemon] = useRequestData([]);
    const [detailPokemon,setDetailPokemon] = useState({})

    const catchPokemon = (element) => {
        const findPokemon = eachPokemon.find((pokemon) => pokemon.id === element);
        setMyPokedex([...myPokedex,findPokemon])

        const findRepeatPokemon = myPokedex.find((pokemon)=>pokemon.id === element)
        if(findRepeatPokemon){
          alert("Pokemon já capturado")
        }
    }
    
    const deletePokemonPokedexPage = (element) =>{
      const deletePokemonPokedex = myPokedex.filter((pokemon)=>{
        return pokemon.id !== element
      })
      setMyPokedex(deletePokemonPokedex)
  }

    const context = {
        myPokedex,
        setMyPokedex,
        catchPokemon,
        eachPokemon,
        deletePokemonPokedexPage,
        detailPokemon,
        setDetailPokemon
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )

}