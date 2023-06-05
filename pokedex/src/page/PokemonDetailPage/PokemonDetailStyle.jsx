import styled from "styled-components";
import background from "../../assets/background2.png"
import backgroundSmall from "../../assets/background.png"

export const MainContainer = styled.main`
  height: 100vh;
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
  font-size: 2.5em;
  color:#fff;
  padding: 1em;
`;

export const SectionPokemon = styled.section `
  margin: 1em 2em;
  display: flex;
  max-width: 95vw;
  height:70vh;
  padding: 2.5em;
  gap: 0 2em;
  color: #fff;


  border-radius: 37px;
  background-color: #729F92;

  background-image: url(${backgroundSmall});
  background-size: 80% ;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
`

export const FirstContainer = styled.div`
  heigth: 100%;
  display:flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-between;

`
export const SecondContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: flex-start;
  border-radius: 12px;
  padding: 1.5em;
`

export const ThirstContainer = styled.div`
  width: calc(100% - 75%);
`

export const FourthContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: calc(100% - 85%);
`

export const ImagePokemon = styled.img`
    position:absolute;
    top: -100px;
    width: 15em;
`