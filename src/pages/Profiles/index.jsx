import React, { useContext } from 'react'
import { Link } from 'react-router-dom' 
import User from '../../components/User'
import { UserContext } from '../../Contexts/UserContext'
import { AddUser, Apresentation, Container, UserList } from './styles'

function Profiles() {
    const { users } = useContext(UserContext)

    return (
        <>
            <Container>
                <Apresentation>
                    <h1>Bem-vindo de volta ao Kenai</h1>
                    <p>Quem está usando?</p>
                </Apresentation>

                <UserList>
                    <User user='Sávio Rian'/>
                    {users.map((user, index) => (
                        <User key={index} user={user}/>
                    ))}
                </UserList>

                <AddUser>
                    <Link to="/newProfile">Adicionar perfil</Link>
                </AddUser>
            </Container>
        </>
    )
}

export default Profiles