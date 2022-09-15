import React from 'react'
import { UserCard } from './styles'

function User({ user, backgroudColor }) {
    return (
        <UserCard backgroudColor={backgroudColor}>
            <div>
                <a href="#"></a>
            </div>
            <p>{user}</p>
        </UserCard>
    )
}

export default User