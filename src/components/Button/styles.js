import styled from "styled-components";

export const ButtonStyle = styled.button`
    color: #F9F9F9;
    background-color: #181818;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    padding: 16px 40px;
    width: 180px;

    @media(max-width: 700px){
        &{
            width: 165px;
        }
    }
`