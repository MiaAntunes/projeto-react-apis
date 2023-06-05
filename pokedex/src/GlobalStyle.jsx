import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root{
            --white-main: #FFFFFF;
            --gray-main: #5E5E5E;
            --blue-main: #33A4F5;
            --red-main: #FF6262;

            --poppins: 'Poppins', sans-serif;
            --inter: 'Inter', sans-serif;
        }

        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
`