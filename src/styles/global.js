import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Mukta', sans-serif; */
        font-family: 'Open Sans', sans-serif;
        color: #F9F9F9;
    }

    body{
        background-color: #121214;
    }

    a{
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    ul{
        list-style: none;
    }

    img{
        max-width: 100%;
        display: block;
    }

    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
`