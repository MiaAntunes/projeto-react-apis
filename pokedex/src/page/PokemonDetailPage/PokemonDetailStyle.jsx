import styled from "styled-components";
import background from "../../assets/background2.png";
import backgroundSmall from "../../assets/background.png";

export const MainContainer = styled.main`
  display:flex;
  flex-direction:column;
  min-height: 150vh;
  width: 100vw;
  background-color: #5e5e5e;

  background-image: url(${background});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -100px;

`;
//Coloque o width depois auto!

export const Title = styled.h1`
font-family: "Poppins";
  font-weight: 700;
  font-size: 1.2em;
  color:#fff;
  padding: .8em;

  @media screen and (min-width: 450px) and (max-width: 600px){
    font-size: 1.3em;
    padding: .95em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px){
    font-size: 1.3em;
    padding: .95em;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px){
    font-size: 1.3em;
    padding: 1em;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 1.4em;
    padding: 1em;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 1.4em;
    padding: 1em;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 1.5em;
    padding: 1em;
  }

  @media screen and (min-width: 1800px) and (max-width: 2000px){
    font-size: 1.9em;
    padding: 1.5em;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 1.9em;
    padding: 1.5em;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 1.9em;
    padding: 1.5em;
  }

  @media screen and (min-width: 3000px) {
    font-size: 1.95em;
    padding: 1.5em;
  }
`;

export const SectionPokemon = styled.section`
  margin: 1em 2em;
  display: flex;
  align-self:center;
  height: auto;
  padding: 2.5em;
  gap: 0 4em;
  color: #fff;

  border-radius: 37px;
  background-color: ${(props) =>{
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
        return "#905291";
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

  background-image: url(${backgroundSmall});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;

  @media screen and (min-width: 280px) and (max-width: 450px){
    height: 55vh;
    padding: 1em;
    gap: 0 1.5em;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px){

  }

  @media screen and (min-width: 1401px) and (max-width: 1600px){

  }

  @media screen and (min-width: 1800px) and (max-width: 2000px){
  height: 65vh;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px){
    height: 70vh;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px){
    height: 70vh;
  }

  @media screen and (min-width: 3000px) {
    height: 70vh;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;

  @media screen and (min-width: 280px) and (max-width: 450px){
    width:10vw;
  }
`;

export const FirstContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 40%;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;

  @media screen and (min-width: 280px) and (max-width: 450px){
    width:10vw;
  }

  @media screen and (min-width: 2000px) {
    width: 11.5vw;
    border-radius: 10px;
  }
`

export const FirstContainerImage = styled.img`
  width: 5em;
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 12px;
  padding: 1.5em;
  width: 23vw;
  gap: 0.5em;
  background-color: #fff;

  @media screen and (min-width: 280px) and (max-width: 450px){
    padding:.8em;
  }

  @media screen and (min-width: 2000px) {
    width: 18vw;
    height: 65vh;
  }
`;

export const SecondContainerTitle = styled.h2`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.5em;
  color: #000;

  @media screen and (min-width: 280px) and (max-width: 450px) {
    font-size:.6em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.2em;
  }
`;

export const SecondContainerBaseStats = styled.div`
  align-items: center;
  display: flex;
  height: 1vh;
  width: 100%;
  color: #000;
`;

export const BaseStatsContent = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
`

export const BaseStatsContentValueTotal = styled.div`
 display: flex;
 align-items: center;
 width: 25%;
`

export const BaseStatsName = styled.p`
  font-family: "Poppins";
  font-size: 0.7em;
  

  @media screen and (min-width: 280px) and (max-width: 450px) {
    font-size:.5em;
  }

  @media screen and (min-width: 2000px) {
    font-size: .7em;
  }
`;

export const BaseStatsValue = styled.p`
  font-family: "Poppins";
  font-size: 0.7em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size:.5em;
  }

  @media screen and (min-width: 2000px) {
    font-size: .7em;
  }
`;

export const BaseStatsValueTotal =  styled.p`
  font-size: .9em;
`

export const LineBaseStats = styled.hr`
  height: .1vh;
  background-color: #a3a2a2d1;
  width: 100%;
  margin: .25em 0;
`

export const ThirstContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 0.3em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    gap: 0.1em;
  }
`;

export const PokemonId = styled.p`
  font-size: 1em;
  font-weight: 100;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size: .7em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1em;
  }
`;

export const PokemonName = styled.h2`
  font-size: 1.5em;
  font-family: "Inter", sans-serif;

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size:.75em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.5em;
  }
`;

export const TypesPokemon = styled.span`
  display: flex;
  gap: 0 0.8em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    gap: 0 0.5em;
  }
`;

export const TypeImage = styled.img`
  width: 4.5vw;

  @media screen and (min-width: 2000px) {
    width: 3.5vw;
  }
`;

export const ThirstContainerMoves = styled.div`
  margin-top: 1em;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 1.1em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    padding: .5em;
  }

`;

export const MovesTitle = styled.h3`
  font-family: "Poppins";
  color: #000;
  font-weight: 700;
  font-size: 1em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size: .7em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.1em;
  }
`;

export const MovesContainer = styled.div`
  display:flex;
  align-items:center;
  height: 4vh;
  background-color: #ececec;
  width: 9em;
  margin: 0.8em 0;
  padding:.5em;
  border-radius: 20px;
  border: 2px dashed rgba(0, 0, 0, 0.14);

  @media screen and (min-width: 2000px) {
    width: 5vw;
  }
`;

export const MovesText = styled.p`
  font-family: "Poppins";
  color: #000;
  font-size:.7em;

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size: .5em;
  }

  @media screen and (min-width: 2000px) {
    font-size:.7em;
  }
`;

export const FourthContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 16vw;
`;

export const ImagePokemon = styled.img`
  position: absolute;
  top: -100px;
  width: 11em;

  @media screen and (min-width: 2000px) {
    width: 8vw;
  }
`;
