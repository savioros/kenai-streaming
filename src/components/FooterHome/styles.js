import styled from "styled-components";

export const HeaderContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;

    ul{
        display: flex;
        align-items: center;
        gap: 80px;
        color: #F9F9F9;
    }

    @media(max-width: 800px){
        &{
            justify-content: center;
        }

        div{
            display: none;
        }
    }
`