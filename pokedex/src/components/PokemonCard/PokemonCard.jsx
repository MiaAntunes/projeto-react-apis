import {
  ArticleContainer,
  FirstContainer,
  PokemonId,
  PokemonName,
  TypesPokemon,
  SecondContainer,
  LinkFromDetail,
  ImagePokemon,
  Button,
} from "./PokemonCardStyled";
import { imageElementPokemon } from "../../utils/imageElementPokemon"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { goToDetailPokemon } from "../../router/coordinator";

export const PokemonCard = (props) => {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const {catchPokemon,deletePokemonPokedexPage,detailPokemon,setDetailPokemon} = context


  const elementPokemon = props.elementoType.map((type, index)=>{
     return <img key={index} src={imageElementPokemon(type.type.name)} alt={type.name} />
  })

  const detailPokemonPage = (element) => {
    setDetailPokemon(element)
    goToDetailPokemon(navigate, element.name);
  };


// Da um loop quando não colocado arrow function
  return (
    <>
          <ArticleContainer elementoType={props.elementoType[0].type.name}>
            <FirstContainer>
              <div>
                <PokemonId>#{props.pokemon.id}</PokemonId>
                <PokemonName>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</PokemonName>
                <TypesPokemon>{elementPokemon}</TypesPokemon>
              </div>
              <LinkFromDetail
                href="#"
                onClick={() => {
                  detailPokemonPage(props.pokemon);
                }}
              >
                Detalhe
              </LinkFromDetail>
            </FirstContainer>
            <SecondContainer>
              <ImagePokemon src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
              {
                location.pathname === "/home"?
                <Button
                backgroundColor="#fff"
                fontColor = "#000"
                onClick={()=>catchPokemon(props.pokemon.id) }
              >
                Capturar!
              </Button>
              // <Modal/>
              :
              <Button
              backgroundColor="#FF6262"
              fontColor = "#fff"
              onClick={()=>deletePokemonPokedexPage(props.pokemon.id) }
              >
                Excluir
              </Button>
              }
            </SecondContainer>
          </ArticleContainer>     
    </>
  );
};
