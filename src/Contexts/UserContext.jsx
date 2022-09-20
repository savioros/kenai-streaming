import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export default function UserProvider({ children }){
    const [users, setUsers] = useState([
        {name: 'Sávio Rian', colorProfile: 'rgb(42, 119, 161)'}
    ])
    const [profileSelected, setProfileSelected] = useState(null)
    const navigate = useNavigate()

    function profileLogin(user){
        if(user){
            setProfileSelected(user)
            navigate('/home')
        }
    }

    return (
        <UserContext.Provider value={{users, setUsers, profileSelected, profileLogin}}>
            {children}
        </UserContext.Provider>
    )
}