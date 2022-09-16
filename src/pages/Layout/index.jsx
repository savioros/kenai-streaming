import React from 'react'
import { Outlet } from 'react-router-dom'
import UserProvider from '../../Contexts/UserContext'

function Layout() {
    return (
        <>
            <UserProvider>
                <Outlet/>
            </UserProvider>
        </>
    )
}

export default Layout