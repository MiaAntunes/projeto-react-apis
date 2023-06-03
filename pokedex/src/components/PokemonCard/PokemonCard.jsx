import { useNavigate } from "react-router-dom"
import { goToDetailPokemon } from "../../router/coordinator"


export const PokemonCard = () =>{
    const navigate = useNavigate()
    return(
        <article>
            <div>
                <p></p>
                <h2></h2>
                <span></span>
                <a href="#" onClick={()=>{goToDetailPokemon(navigate)}}>Detalhe</a>
            </div>
            <div>
                <img src="" alt="" />
                <button>Capturar Ou Excluir</button> 
            </div>
        </article>
    )
}