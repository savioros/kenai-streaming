import styled from "styled-components";

export const HeaderContainer = styled.header`
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

    button{
        display: none;
    }

    @media(max-width: 800px){
        padding: 24px;
        
        button{
            display: block;
        }

        ul{
            display: none;
            position: absolute;
            width: max-content;
            top: 77px;
            right: 20px;
            background-color: #121214;
            height: max-content;
            z-index: 1000;
            padding: 20px 40px;
            transition: .2s ease-out;
            border-radius: 5px; 

            li{
                padding: .5rem 0;
            }
        }

        ul.open{
            display: block;
        }
    }
`