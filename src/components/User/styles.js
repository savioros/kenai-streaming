import styled from "styled-components";

export const UserCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 200px;
    color: #A8A8A8;
    transition: .2s ease-out;

    div{
        background-color: #fff;
        width: 176px;
        height: 176px;
        border-radius: 50%;
        position: relative;

        a{
            position: absolute;
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
    }
    
    p{
        font-weight: 400;
        font-size: 32px;
        line-height: 44px;
    }

    &:hover{
        transform: scale(1.05, 1.05);
    }

    @media(max-width: 900px){
        div{
            width: 120px;
            height: 120px;
        }

        p{
            font-size: 24px;
        }
    }

    @media(max-width: 450px){
        &{
            gap: 26px;
        }
    }
`