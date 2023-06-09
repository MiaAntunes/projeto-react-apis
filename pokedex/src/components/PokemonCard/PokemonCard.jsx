import { useNavigate } from "react-router-dom";
import { goToDetailPokemon } from "../../router/coordinator";
import {
  ArticleContainer,
  FirstContainer,
  SecondContainer,
  LinkFromDetail,
  ImagePokemon,
  Button,
} from "./PokemonCardStyled";
import { useRequestData } from "../../hooks/useRequestData";
import { usePokedex } from "../../hooks/usePokedex";

export const PokemonCard = (props) => {
  
  return (
    <>
          <ArticleContainer elementoType={props.elementoType[0].type.name}>
            <FirstContainer>
              <div>
                <p>#0</p>
                <h2>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h2>
                <span>Lógica</span>
              </div>
              <LinkFromDetail
                href="#"
                onClick={() => {
                  props.detailPokemon(props.pokemon)
                }}
              >
                Detalhe
              </LinkFromDetail>
            </FirstContainer>
            <SecondContainer>
              <ImagePokemon src={props.pokemon.sprites.other["official-artwork"].front_default} alt="" />
              <Button
                style={{
                  backgroundColor: props.buttonBackgroundColor,
                  color: props.buttonColor,
                }} onClick={()=>props.catchPokemon(props.pokemon)}
              >
                {props.buttonTitle}
              </Button>
            </SecondContainer>
          </ArticleContainer>     
    </>
  );
};
