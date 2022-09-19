import styled from "styled-components";

export const Container = styled.div`
    position: relative;

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

    div.arrowLeft,
    div.arrowRight{
        position: absolute;
        bottom: 200px;
        z-index: 10000;
        cursor: pointer;
        transition: .2s ease-out;

        &:hover{
            transform: scale(1.25, 1.25);
        }
    }

    div.arrowLeft{
        left: -45px;
    }

    div.arrowRight{
        right: -45px;
    }

    ul{
        display: flex;
        gap: 80px;
        margin-top: 50px;
        overflow: hidden;
        padding: 15px 0;
        transition: .5s ease-out;

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

    @media(max-width: 800px){
        div.arrowLeft{
            left: -25px;
        }

        div.arrowRight{
            right: -25px;
        }

        ul{
            padding: 0;
            gap: 60px;
        }
    }

    @media(max-width: 500px){
        margin-top: 26px;

        h2{
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;
        }

        div.arrowLeft,
        div.arrowRight{
            bottom: 100px;
        }

        div.arrowLeft{
            left: -25px;
        }

        div.arrowRight{
            right: -25px;
        }

        ul{
            gap: 16px;
            padding: 20px 0;
            margin-top: 24px;

            li{
                min-width: 168px;
                height: 235px;

                div{
                    bottom: -18px;
                }
            }
        }
    }
`