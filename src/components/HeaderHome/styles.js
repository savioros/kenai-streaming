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
        background-color: transparent;
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
            opacity: 0;
            transform: scale(.8);
            animation: scaleUp .4s forwards;

            li{
                padding: .5rem 0;
            }

            @keyframes scaleUp{
                to{
                    opacity: initial;
                    transform: initial;
                }
            }
        }

        ul.open{
            display: block;
            text-align: center;
        }
    }
`