import React, { useContext } from 'react'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import { UserContext } from '../../Contexts/UserContext'
import { Container, Content } from './styles'

function Home() {
    const { profileSelected } = useContext(UserContext)

    return (
        <Container>
            <HeaderHome/>

            <Content>

            </Content>

            <FooterHome/>
        </Container>
    )
}

export default Home