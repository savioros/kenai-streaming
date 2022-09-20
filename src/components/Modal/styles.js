import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .8);
    z-index: 99999;
`

export const Content = styled.div`
    width: 80%;
    height: auto;
    background-color: #121214;
    border-radius: 15px;
    max-width: 1200px;
    opacity: 0;
    transform: scale(.8);
    animation: scaleUp .5s forwards;

    @keyframes scaleUp{
        to{
            opacity: initial;
            transform: initial;
        }
    }
`

export const Poster = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${(props) => props.pathImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px 15px 0 0;
    position: relative;

    button{
        position: absolute;
        right: -20px;
        top: -20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #121214;
        font-size: 20px;
        cursor: pointer;
        transition: .2s ease-out;

        &:hover{
            background-color: #B33030;
        }
    }

    @media(max-width: 500px){
        height: 400px;

        button{
            width: 40px;
            height: 40px;
            right: -15px;
            font-size: 18px;
        }
    }
`

export const Description = styled.div`
    width: 100%;
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-size: 32px;
        }

        span{
            font-size: 20px;
        }
    }

    p{
        margin-top: 30px;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }

    @media(max-width: 800px){
        p{
            max-width: 50ch;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            font-size: 24px;
        }
    }

    @media(max-width: 500px){
        div h2{
            font-size: 24px;
        }

        div span{
            font-size: 16px;
        }

        p{
            font-size: 16px;
        }
    }
`