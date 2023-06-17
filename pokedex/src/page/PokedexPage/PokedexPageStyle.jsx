import styled from "styled-components";

export const MainContainer = styled.main`
  min-height:100vh;
  height: auto;
  width: 100vw;
  background: #5e5e5e;
`;
//Coloque o width depois auto!

export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2.5em;
  color: #fff;
  padding: 1em;
`;

export const SectionPokemon = styled.section`
  margin: 1em 2em;
  display: flex;
  gap: 5em 2em;
  max-width: 95vw;
  flex-wrap: wrap;
  justify-content: center;
`;
