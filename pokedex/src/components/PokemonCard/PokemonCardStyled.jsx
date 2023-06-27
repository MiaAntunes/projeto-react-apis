import styled from "styled-components";
import background from "../../assets/background.png";

export const ArticleContainer = styled.article`
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
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 90%;

    width: 70vw;
    height: auto;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;

  @media screen and (min-width: 450px) and (max-width: 600px){
    width: 60vw;
    min-height: 20vh;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    width: 40vw;
    min-height: 17vh;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width: 40vw;
    min-height: 15vh;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: 35vw;
    min-height: calc(100vh - 70vh);
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: 25vw;
    min-height: calc(100vh - 73vh);
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: 22vw;
    min-height: calc(100vh - 73vh);
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    width: 20vw;
    min-height: calc(100vh - 73vh);
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    width: 20vw;
    min-height: calc(100vh - 73vh);
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    width: 20vw;
    min-height: calc(100vh - 73vh);
  }
  
  @media screen and (min-width: 3000px) {
    width: 20vw;
    min-height: calc(100vh - 73vh);
  }

`

export const FirstContainer = styled.div`
    gap: 2em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em 0 1em 1.5em;
    color: #fff;


  
  @media screen and (min-width: 601px) and (max-width: 800px){
    padding: 1em ;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    padding: 1em ;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    padding: 1em ;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    padding: 1em ;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    padding: 1em ;
  }
  
  @media screen and (min-width: 1700px) and (max-width: 2000px){
    padding: 1.5em ;
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    padding: 1.6em ;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    padding: 1.6em ;
  }
  
  @media screen and (min-width: 3000px) {
    padding: 1.6em ;
  }
`

export const PokemonId = styled.p`
    font-size: 0.65em;
    font-weight: 100;
    font-family: "Inter", sans-serif;

  
  @media screen and (min-width: 601px) and (max-width: 800px){
    font-size: 0.7em;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    font-size: 0.7em;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 0.7em;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 0.7em;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 0.8em;
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    font-size: 0.95em;
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 0.9em;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 0.9em;
  }
  
  @media screen and (min-width: 3000px) {
    font-size: 0.95em;
  }
`

export const PokemonName = styled.h2`
    font-size: 0.9em;
    font-family: "Inter", sans-serif;

  
  @media screen and (min-width: 601px) and (max-width: 800px){
    font-size: 0.95em;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    font-size: 0.95em;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 1em;

  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 1em;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 1.2em;
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    font-size: 1.4em;
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 1.4em;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 1.4em;
  }
  
  @media screen and (min-width: 3000px) {
    font-size: 1.4em;
  }
`

export const TypesPokemon = styled.span`
    width: 2.5em;
    display: flex;
    gap: 0 0.5em;

  
  @media screen and (min-width: 450px) and (max-width: 600px){
    width: 2.6em;
  }  

  @media screen and (min-width: 601px) and (max-width: 800px){
    width: 2.8em;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width: 2.8em;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: 2.8em;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: 2.8em;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: 2.8em;
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    width: 3em;
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    width: 4em;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    width: 4em;
  }
  
  @media screen and (min-width: 3000px) {
    width: 5em;
  }
`

export const LinkFromDetail = styled.a`
    font-size: 0.70em;   
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
    font-family: "Poppins", sans-serif;

  &:hover {
    color: #000;
  }


  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 0.75em;   
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 0.8em;   
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 0.8em; 
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    font-size: 0.95em; 
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 0.95em; 
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 0.95em; 
  }
  
  @media screen and (min-width: 3000px) {
    font-size: 1em; 
  }
`

export const SecondContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50vw;
`

export const ImagePokemon = styled.img`
  width: 25vw;
  position: absolute;
  bottom: 55%;
  right: 10%;

  @media screen and (min-width: 450px) and (max-width: 600px){
    width: 20vw;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    width: 14vw;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width: 14vw;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: calc(100% - 55%);
    right: 8%;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: calc(100% - 53%);
    bottom: calc(100% - 34%);
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: calc(100% - 53%);
    bottom: calc(100% - 38%);
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    width: calc(100% - 43%);
    bottom: calc(100% - 35%);
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    width: calc(100% - 50%);
    bottom: calc(100% - 35%);
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    width: calc(100% - 50%);
    bottom: calc(100% - 40%);
  }
  
  @media screen and (min-width: 3000px) {
    width: calc(100% - 50%);
    bottom: calc(100% - 35%);
  }
`

export const Button = styled.button`
    width: 21vw;
    height: 3.2vh;

    font-size: 0.65em;
    font-family: "Poppins", sans-serif;

    position: absolute;
    bottom: 7%;
    right: 10%;

    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.backgroundColor};

    
  @media screen and (min-width: 450px) and (max-width: 600px){
    width: 15vw;
    height: 3.5vh;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    width: 12vw;
    height: 2.5vh;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width: 12vw;
    height: 2.5vh;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: 10vw;
    min-height: calc(100% - 80%);
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: 8vw;
    min-height: calc(100% - 82%);
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: 6vw;
    min-height: calc(100% - 82%);
  }
  
  @media screen and (min-width: 1800px) and (max-width: 2000px){
    width: 5.5vw;
    min-height: calc(100% - 85%);
    font-size: .8em;
  }
  
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    width: 5.5vw;
    min-height: calc(100% - 90%);
    font-size: .8em;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    width: 5.5vw;
    min-height: calc(100% - 90%);
    font-size: .85em;
  }
  
  @media screen and (min-width: 3000px) {
    width: 5.5vw;
    min-height: calc(100% - 90%);
    font-size: .9em;
  }
`


