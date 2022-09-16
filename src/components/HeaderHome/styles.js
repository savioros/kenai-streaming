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
        button{
            display: block;
        }

        ul{
            display: block;
            position: absolute;
            width: 100%;
            top: 100px;
            right: 0;
            background-color: #121214;
            height: 0;
            z-index: 1000;
            padding: 0 40px;
            transition: .6s ease-out;
            visibility: hidden;
            overflow-y: hidden;

            li{
                padding: 1rem 0;
                border-bottom: 2px solid rgba(0, 0, 0, .2);
            }
        }

        ul.open{
            height: calc(100vh - 100px);
            visibility: visible;
            overflow-y: auto;
        }
    }
`