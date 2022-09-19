import styled from "styled-components";

export const Container = styled.div`
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Content = styled.main`
    width: 100%;
    height: 100%;
    height: 1000px;
`

export const SinopsePoster = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    span{
        color: #FFA634;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        padding: 4px 8px;
        background-color: #181818;
        border-radius: 0px 8px;
    }

    h2{
        font-weight: 600;
        font-size: 56px;
        line-height: 64px;
    }

    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }

    a{
        padding: 12px 64px;
        color: #000;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        background: #FFA634;
        border-radius: 4px; 
        margin-top: 30px;
    }
`

export const Movies = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 80px;
`