import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/BASE_URL"
import { useEffect } from "react"


export const useRequestData = (stateInicial) =>{
    const [data, setData] = useState(stateInicial)

    const receberDados = async () => {
            try {
              const results = [];
      
              for (let i = 1; i <= 200; i++) {
                results.push(axios.get(`${BASE_URL}/${i}`));
              }
         
              const responses = await Promise.all(results);

              const pokemonData = responses.map((response) => response.data);
      
              setData(pokemonData);
            } catch (error) {
              console.log(error);
            }
    }

    useEffect(()=>{
      receberDados()
    },[])


    return [data,setData, receberDados]
}

