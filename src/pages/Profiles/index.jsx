import React, { useContext } from 'react'
import { Link } from 'react-router-dom' 
import HeaderProfiles from '../../components/HeaderProfiles'
import User from '../../components/User'
import { UserContext } from '../../Contexts/UserContext'
import { AddUser, Apresentation, Container, UserList } from './styles'

function Profiles() {
    const { users } = useContext(UserContext)

    return (
        <>
            <HeaderProfiles/>
            <Container>
                <Apresentation>
                    <h1>Bem-vindo de volta ao Kenai</h1>
                    <p>Quem está usando?</p>
                </Apresentation>

                <UserList>
                    {users.map((user, index) => (
                        <User key={index} user={user}/>
                    ))}
                </UserList>

                <AddUser>
                    <Link to="newProfile">Adicionar perfil</Link>
                </AddUser>
            </Container>
        </>
    )
}

export default Profiles