import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NewProfile from './pages/NewProfile'
import NotFound from './pages/NotFound'
import Profiles from './pages/Profiles'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='' element={<Profiles/>}/>
                    <Route path='newProfile' element={<NewProfile/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default Router