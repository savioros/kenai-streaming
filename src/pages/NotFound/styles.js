import styled from "styled-components";

export const NotFoundStyle = styled.div`
    color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1{
        font-weight: bold;
        font-size: 128px;
        line-height: 87px;
    }

    p{
        font-weight: 300;
        font-size: 48px;
        line-height: 87px;
    }

    @media(max-width: 750px){
        &{
            gap: 0;
        }

        h1{
            font-size: 64px;
        }

        p{
            font-size: 20px;
        }
    }
`