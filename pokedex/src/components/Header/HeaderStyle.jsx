import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1em;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  position: relative;
`;

export const ButtonListPokemon = styled.button`
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1em;
  text-decoration-line: underline;
  position: absolute;
  left: 5%;
  
  
  @media screen and (min-width: 280px) and (max-width: 450px){
    font-size: .5em;
    left: 3%;
  }

  @media screen and (min-width: 2000px) {
    width:8vw;
    font-size:0.9em;
  }
`;

export const Logo = styled.img`
  width: 12em;
  position: absolute;
  left: 45%;

  @media screen and (min-width: 280px) and (max-width: 450px){
    width:22vw;
    left: 42%;
  }

  @media screen and (min-width: 451px) and (max-width: 900px) {
    left: 36%;
  }

  @media screen and (min-width: 2000px) {
    width:6.5vw;
  }
`;

export const ButtonPokedex = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.1em;
  height: 5vh;
  width: 14vw;
  color: #fff;
  position: absolute;
  right: 8%;
  background-color:${props=>(props.backgroundColor)};

  @media screen and (min-width: 280px) and (max-width: 450px) {
    width: 15vw;
    height: 4vh;
    font-size: .6em;
    right: 2%;
  }

  @media screen and (min-width: 2000px) {
    width:8vw;
    font-size:0.9em;
  }
`;

export const ButtonDetail = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.1em;
  height: 5vh;
  width: 14vw;
  color: #fff;
  position: absolute;
  right: 8%;
  background-color:${props=>(props.backgroundColor)};

  @media screen and (min-width: 280px) and (max-width: 450px){
    width: 18vw;
    height: 4vh;
    font-size: .5em;
    right: 2%;
  }

  @media screen and (min-width: 2000px) {
    width:8vw;
    font-size:0.85em;
  }
`;
