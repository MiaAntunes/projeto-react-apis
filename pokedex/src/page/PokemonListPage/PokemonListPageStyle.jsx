import styled from "styled-components";

export const MainContainer = styled.main`
  min-height:100vh;
  width: 100vw;
  background: #5e5e5e;
  padding-bottom:2em ;
`;
//Coloque o width depois auto!

export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2.5em;
  color:#fff;
  padding: 1em;
  /* transition: ease-in-out 1s;
  transform: translateY(-45px); */

  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size:1.3em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.9em;
  }
`

export const SectionPokemon = styled.section `
  margin: 1em 0;
  display: flex;
  gap: 5em 1.5em;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 280px) and (max-width: 450px){
    gap:3em;
  }
`
// testar o flex-wrap aqui!!
