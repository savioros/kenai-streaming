import React, { useState } from 'react'
import { HeaderContainer } from './styles'

import Logo from '../../assets/images/Kenai.svg'

function HeaderProfiles() {
    const [hour, setHour] = useState('')

    function updateClock(){
        const present = new Date()
        const houry = present.getHours()
        const minutes = present.getMinutes()
        const fullHour = `${String(houry).length === 1 ? `0${houry}` : houry}:${String(minutes).length === 1 ? `0${minutes}` : minutes}`

        setHour(fullHour)
    }

    setInterval(updateClock, 1000)

    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="Logo Kenai" />
            </div>

            <span>{hour}</span>
        </HeaderContainer>
    )
}

export default HeaderProfiles