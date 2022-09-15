import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderProfiles from '../../components/HeaderProfiles'
import UserProvider from '../../Contexts/UserContext'

function Home() {
    return (
        <>
            <HeaderProfiles/>
            <UserProvider>
                <Outlet/>
            </UserProvider>
        </>
    )
}

export default Home