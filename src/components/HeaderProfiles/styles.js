import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    
    span{
        width: 90px;
        height: 49px;
        color: #fff;
        font-weight: 300;
        font-size: 36px;
        line-height: 49px;
    }

    @media(max-width: 700px){
        &{
            justify-content: center;
        }

        span{
            display: none;
        }
    }
`