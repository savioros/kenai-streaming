import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 129px);
    color: #F9F9F9;
    
    @media(max-width: 700px){
        &{
            justify-content: space-around;
        }
    }
`

export const Apresentation = styled.div`
    text-align: center;
    margin-top: 40px;

    h1{
        font-weight: 300;
        font-size: 64px;
        line-height: 87px;
    }

    p{
        font-weight: 300;
        font-size: 40px;
        line-height: 54px;
    }

    @media(max-width: 900px){
        &{
            margin-top: 20px;
        }
        
        h1{
            font-size: 48px;
        }

        p{
            font-size: 28px;
        }
    }

    @media(max-width: 700px){

        h1{
            font-size: 38px;
        }

        p{
            font-size: 24px;
        }
    }

    @media(max-width: 450px){
        &{
            margin-top: 40px;
        }

        h1{
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
        }

        p{
            font-weight: 300;
            font-size: 18px;
            line-height: 25px;
        }
    }
`

export const UserList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    margin-top: 200px;

    @media(max-width: 900px){
        &{
            margin-top: 190px;
            gap: 50px;
        }
    }

    @media(max-width: 700px){
        &{
            margin-top: 80px;
        }
    }

    @media(max-width: 450px){
        &{
            margin-top: 48px;
        }
    }
`

export const AddUser = styled.a`
    padding: 16px 40px;
    background-color: #181818;
    margin-top: 108px;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;

    @media(max-width: 700px){
        &{
            margin-top: 50px;
        }
    }

    @media(max-width: 450px){
        &{
            margin-top: 30px;
        }
    }
`