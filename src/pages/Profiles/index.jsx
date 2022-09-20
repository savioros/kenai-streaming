import React, { useContext } from 'react'
import { Link } from 'react-router-dom' 
import HeaderProfiles from '../../components/HeaderProfiles'
import User from '../../components/User'
import { UserContext } from '../../Contexts/UserContext'
import { AddUser, Apresentation, Container, UserList } from './styles'

function Profiles() {
    const { users } = useContext(UserContext)

    console.log(users)

    return (
        <>
            <HeaderProfiles/>
            <Container>
                <Apresentation>
                    <h1>Bem-vindo de volta ao Kenai</h1>
                    <p>Quem está usando?</p>
                </Apresentation>

                <UserList>
                    {users.map(({ name, colorProfile }, index) => (
                        <User key={index} user={name} colorProfile={colorProfile}/>
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