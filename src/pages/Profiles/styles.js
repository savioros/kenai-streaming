import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 129px);
    color: #F9F9F9;
`

export const Apresentation = styled.div`
    text-align: center;
    margin-bottom: 210px;

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
`

export const UserList = styled.ul`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    margin-bottom: 138px;
`

export const AddUser = styled.a`
    padding: 16px 40px;
    background-color: #181818;
    margin-bottom: 80px;
`