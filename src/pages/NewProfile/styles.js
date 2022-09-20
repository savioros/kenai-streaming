import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 129px);
    color: #F9F9F9;
`

export const Title = styled.h1`
    font-weight: 300;
    font-size: 64px;
    line-height: 87px;
    margin-top: 40px;

    @media(max-width: 700px){
        &{
            font-size: 38px;
        }
    }
`

export const User = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${(props) => props.colorImage};
    margin-top: 100px;

    @media(max-width: 700px){
        &{
            width: 150px;
            height: 150px;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    gap: 40px;
    
    input{
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        width: 400px;
        padding: 15px;
        color: #000;

        &.error{
            border: 2px solid red;
        }

        &:focus{
            outline: 0;
        }
    }

    div{
        display: flex;
        gap: 20px;
    }

    a{
        color: #F9F9F9;
        background-color: #181818;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        padding: 16px 40px;
        width: 180px;
    }

    @media(max-width: 700px){
        &{
            margin-top: 100px;
        }

        input{
            width: 350px;
        }

        a{
            width: 165px;
        }
    }
`