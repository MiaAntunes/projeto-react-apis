import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/BASE_URL"
import { useEffect } from "react"


export const useRequestData = (stateInicial) =>{
    const [data, setData] = useState(stateInicial)

    const receberDados = async () => {
            try {
              const results = [];
              // ! console.log("Resultado Da Promise.all",results)
      
              for (let i = 1; i <= 20; i++) {
                results.push(axios.get(`${BASE_URL}/${i}`));
              }

              //o Promisse.all faz com que só será resolvida quando todo o loop do array for concluido, nada mais e nada menos que é um condição que só vai ser mostrada todos resultados quando a "promessa for feita"
              const responses = await Promise.all(results);
              // ! console.log("Respostas: ", responses)

              //Fazer um map para só aparecer o data como o resultado da constante pokemonData
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