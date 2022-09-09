import React from 'react'
import HeaderProfiles from '../../components/HeaderProfiles'
import User from '../../components/User'
import { AddUser, Apresentation, Container, UserList } from './styles'

function Profiles() {
    return (
        <>
            <HeaderProfiles/>
            <Container>
                <Apresentation>
                    <h1>Bem-vindo de volta ao Kenai</h1>
                    <p>Quem está usando?</p>
                </Apresentation>

                <UserList>
                    <User/>
                    <User/>
                    <User/>
                </UserList>

                <AddUser href="#">Adicionar perfil</AddUser>
            </Container>
        </>
    )
}

export default Profiles