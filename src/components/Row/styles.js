import styled from "styled-components";

export const Container = styled.div`
    h2{
        font-weight: 600;
        font-size: 32px;
        line-height: 44px;

        &::after{
            content: '';
            display: block;
            width: 61px;
            height: 2px;
            background-color: #FFA634;
            margin-top: 6px;
        }
    }

    ul{
        display: flex;
        gap: 80px;
        margin-top: 50px;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 15px;

        li{
            min-width: 300px;
            height: 440px;
            display: flex;
            flex-direction: column;
            z-index: 1000;
            position: relative;
            transition: .2s ease-out;
            cursor: pointer;

            div{
                position: absolute;
                bottom: -10px;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, rgba(24, 24, 24, 0.8) 80.79%);
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 24px;
            }

            &:hover{
                transform: scale(1.05, 1.05);
            }
        }
    }
`