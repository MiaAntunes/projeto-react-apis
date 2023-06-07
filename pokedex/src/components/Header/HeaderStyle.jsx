import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    padding: 1em;
    width: 100vw;
    height: 10vh;
    align-items: center;
    justify-content: space-around;
    background:#fff;
`;

export const ButtonListPokemon = styled.button`
    background: transparent;
    font-family:'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1em;
    text-decoration-line: underline;
    position: absolute; 
    left: 5%;
`

// ! Colocar um position na LOGO
export const Logo = styled.img`
    width: 12em;
    position:absolute;
    left: 45%;
`

export const ButtonPokedex = styled.button`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1em;
    heigth:2em;
    width:12em;
    color: #FFF;
    position: absolute;
    right:10%;
`
