import React, { useContext } from 'react'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import { UserContext } from '../../Contexts/UserContext'
import Poster from '../../assets/images/poster.png'
import { Container, Content, Movies, SinopsePoster } from './styles'
import API_KEY from '../../services/apikey'
import Row from '../../components/Row'

const rows = [
    {
        title: 'Populares',
        path: `trending/all/week?api_key=${API_KEY}&language=pt-BR`
    }
]

function Home() {
    const { profileSelected } = useContext(UserContext)

    return (
        <Container image={Poster}>
            <HeaderHome/>

            <Content>
                <SinopsePoster>
                    <span>Ação</span>
                    <h2>Batman</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> 
                        Sed dictum convallis turpis, nec rutrum quam vulputate <br/> 
                        viverra. Proin ornare dolor sit amet laoreet dignissim. 
                    </p>
                    <a href="#">Assistir agora</a>
                </SinopsePoster>

                <Movies>
                    {rows?.map(({title, path}, index) => (
                        <Row key={index} title={title} path={path}/>
                    ))}
                </Movies>
            </Content>

            {/* <FooterHome/> */}
        </Container>
    )
}

export default Home