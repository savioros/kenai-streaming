import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'

function Home() {
    const { profileSelected } = useContext(UserContext)

    return (
        <div>
            {profileSelected}
        </div>
    )
}

export default Home