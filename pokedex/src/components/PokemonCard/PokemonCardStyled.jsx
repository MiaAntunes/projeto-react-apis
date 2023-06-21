import styled from "styled-components";
import background from "../../assets/background.png";

export const ArticleContainer = styled.article`
  width: 30vw;
  height: auto;
  border-radius: 12px;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 90%;

  display: flex;
  justify-content: space-between;
  background-color: ${(props) => {
    switch (props.elementoType) {
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      case "dark":
        return "#3a3441";
      case "dragon":
        return "#0662b3";
      case "electric":
        return "#d7ba36";
      case "fairy":
        return "#c373bd";
      case "fighting":
        return "#ba3b5f";
      case "flying":
        return "#587f9b";
      case "ghost":
        return "#42548b";
      case "ground":
        return "#c0683c";
      case "ice":
        return "#589f94";
      case "poison":
        return "#915292";
      case "psychic":
        return "#cd5c60";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#a5a5a5";
      default:
        return "black";
    }
  }};

  @media screen and (min-width: 280px) and (max-width: 450px) {
    width: 70vw;
  }

  @media screen and (min-width: 451px) and (max-width: 900px) {
    width: 40vw;
  }

  @media screen and (min-width: 2000px) {
    width: 20vw;
    height: 28vh;
  }
`;

export const FirstContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2.5em;
  padding: 1em 0 1em 1.5em;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    gap: 2em;
  }
`;
// Fazer o paragrafo, o h2, e a lógica

export const PokemonId = styled.p`
  font-size: 1em;
  font-weight: 100;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    font-size: 0.85em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 0.85em;
  }
`;

export const PokemonName = styled.h2`
  font-size: 1.5em;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    font-size: 0.95em;
  }
`;

export const TypesPokemon = styled.span`
  width: 7vw;
  display: flex;
  gap: 0 0.5em;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    width: 10vw;
  }

  @media screen and (min-width: 2000px) {
    width: 3vw;
  }
`;

export const LinkFromDetail = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #000;
  }

  @media screen and (min-width: 280px) and (max-width: 450px) {
    font-size: 0.75em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 0.85em;
  }
`;

export const SecondContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  position: relative;
  width: calc(100% - 60%);
`;

export const ImagePokemon = styled.img`
  position: absolute;
  bottom: 55%;
  width: 10vw;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    width: 25vw;
  }

  @media screen and (min-width: 451px) and (max-width: 900px) {
    width: auto;
  }

  @media screen and (min-width: 2000px) {
    bottom: 50%;
    width: 7.5vw;
  }
`;

//Duvidas com esse position !!!!!
export const Button = styled.button`
  position: absolute;
  bottom: 7%;
  height: 2.5em;
  width: 9vw;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    width: 21vw;
    height: 3vh;
    font-size: 0.75em;
    
  }

  @media screen and (min-width: 451px) and (max-width: 900px) {
    width: 15vw;
    font-size: .9em;
  }

  @media screen and (min-width: 2000px) {
    width: 6vw;
    bottom: 6%;
    font-size: 0.9em;
  }
`;
