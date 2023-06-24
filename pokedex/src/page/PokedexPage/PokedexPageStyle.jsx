import styled from "styled-components";

export const MainContainer = styled.main`
   min-height: 150vh;
   width: 100vw;
   background: #5e5e5e;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em 1em;
  margin: .5em 0;

  @media screen and (min-width: 450px) and (max-width: 600px){
    gap: 3em 1.5em;
    margin: .6em 0;
  }

  @media screen and (min-width: 601px) and (max-width: 800px){
    gap: 3em 1.5em;
    margin: .6em 0;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px){
    gap: 3em 1.5em;
    margin: .7em 0;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px){
    gap: 3.2em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px){
    gap: 3.2em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px){
    gap: 3.2em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 1800px) and (max-width: 2000px){
    gap: 3.5em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px){
    gap: 3.5em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px){
    gap: 3.5em 1.8em;
    margin: .7em 0;
  }

  @media screen and (min-width: 3000px) {
    gap: 3.5em 1.8em;
    margin: .7em 0;
  }

`;
