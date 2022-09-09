import React from 'react'
import { Routes, Route } from "react-router-dom"
import Profiles from './pages/Profiles'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Profiles/>}/>
            </Routes>
        </>
    )
}

export default Router