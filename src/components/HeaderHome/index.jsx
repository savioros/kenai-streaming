import React, { useState } from 'react'
import Logo from '../../assets/images/Kenai.svg'
import Search from '../../assets/icons/search.svg'
import User from '../../assets/icons/user.svg'
import Bell from '../../assets/icons/bell.svg'
import Menu from '../../assets/icons/menu.svg'
import { HeaderContainer } from './styles'

function HeaderHome() {
    const [menuMobile, setMenuMobile] = useState(false)

    function activeMenu(e){
        e.preventDefault()
        setMenuMobile(!menuMobile)
    }

    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="Logo Kenai" />
            </div>


            <nav>
                <button onClick={activeMenu}>
                    <img src={Menu} alt="" />
                </button>

                <ul className={menuMobile ? 'open' : ''}>
                    <li><img src={Search} alt="" /></li>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Minha Lista</a></li>
                    <li><img src={Bell} alt="" /></li>
                    <li><img src={User} alt="" /></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default HeaderHome