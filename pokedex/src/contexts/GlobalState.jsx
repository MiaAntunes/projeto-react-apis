import { useState } from "react"
import { GlobalContext } from "./GlobalContext";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) =>{
    const [myPokedex, setMyPokedex] = useState([])
    const [eachPokemon, setEachPokemon] = useRequestData([]);
    const [detailPokemon,setDetailPokemon] = useState({})
    const [modalPokemon, setModalPokemon] = useState(false)
    const [modalStatus, setModalStatus] = useState()

    const catchPokemon = (element) => {
        const findPokemon = eachPokemon.find((pokemon) => pokemon.id === element);
        setMyPokedex([...myPokedex,findPokemon])
        setModalPokemon(true)
        setModalStatus(0)
    }
    
    const deletePokemonPokedexPage = (element) =>{
      const deletePokemonPokedex = myPokedex.filter((pokemon)=>{
        return pokemon.id !== element
      })
      setMyPokedex(deletePokemonPokedex)
      setModalPokemon(true)
      setModalStatus(1)
  }

    const context = {
        myPokedex,
        setMyPokedex,
        catchPokemon,
        eachPokemon,
        deletePokemonPokedexPage,
        detailPokemon,
        setDetailPokemon,
        modalPokemon,
        setModalPokemon, 
        modalStatus,
        setModalStatus
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )

}