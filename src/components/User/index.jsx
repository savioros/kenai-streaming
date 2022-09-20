import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { UserCard } from './styles'

function User({ user, colorProfile }) {
    const { profileLogin } = useContext(UserContext)

    return (
        <UserCard colorImage={colorProfile}>
            <button onClick={() => profileLogin(user)}></button>
            <p>{user}</p>
        </UserCard>
    )
}

export default User