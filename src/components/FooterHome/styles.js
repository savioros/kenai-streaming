import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    margin-top: 90px;

    ul{
        display: flex;
        align-items: center;
        gap: 80px;
        color: #F9F9F9;
    }

    @media(max-width: 800px){
        justify-content: center;
        margin-top: 40px;

        div{
            display: none;
        }
    }

    @media(max-width: 500px){
        margin-top: 0;
    }
`