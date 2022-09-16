import React from 'react'
import Logo from '../../assets/images/KenaiFooter.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Facebook from '../../assets/icons/facebook.svg'
import { HeaderContainer } from './styles'

function FooterHome() {
    return (
        <HeaderContainer>
            <div>
                <img src={Logo} alt="Logo Kenai" />
            </div>

            <nav>
                <ul>
                    <li><img src={Instagram} alt="" /></li>
                    <li><img src={Twitter} alt="" /></li>
                    <li><img src={Facebook} alt="" /></li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default FooterHome