import styled from "styled-components";
import background from "../../assets/background.png"

export const ArticleContainer = styled.article`
    width: 30vw;
    height: 18vh;
    background: #729F92;
    border-radius: 12px;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 90%;

    display: flex;
    justify-content: space-between;
`

export const FirstContainer = styled.div`
    color: #fff;
    display:flex;
    flex-direction:column;
    gap: 3em;
    padding: 1em 0 1em 1.5em;
`
// Fazer o paragrafo, o h2, e a lógica

export const LinkFromDetail =  styled.a`
    color:#fff;
    text-decoration:underline;

    &:hover {
        color:#000;
    }
`

export const SecondContainer = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    margin: .5em;
    position:relative;
    width:calc(100% - 60%);
`

export const ImagePokemon = styled.img`
    position:absolute;
    bottom:50px;
`
//Duvidas com esse position !!!!!
export  const Button = styled.button`
    position:absolute;
    bottom:0;
    width:calc(100% - 30px);
    color:#fff;
`