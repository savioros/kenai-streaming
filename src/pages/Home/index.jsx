import React, { useContext, useState } from 'react'
import FooterHome from '../../components/FooterHome'
import HeaderHome from '../../components/HeaderHome'
import { UserContext } from '../../Contexts/UserContext'
import Poster from '../../assets/images/poster.png'
import PosterMobile from '../../assets/images/posterMobile.png'
import { Container, Content, Movies, SinopsePoster } from './styles'
import Row from '../../components/Row'
import Modal from '../../components/Modal'

const rows = [
    {
        title: 'Populares',
        path: `trending/all/week?api_key=${process.env.REACT_APP_SECRET_KEY}&language=pt-BR`
    }
]

function Home() {
    const [modal, setModal] = useState(false)
    const [previewMovie, setPreviewMovie] = useState({})
    const { profileSelected } = useContext(UserContext)

    return (
        <Container image={Poster} imageMobile={PosterMobile}>
            <HeaderHome/>

            <Content>
                <SinopsePoster>
                    <span>Ação</span>
                    <h2>Batman</h2>
                    <p>
                        Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. 
                        Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um 
                        verdadeiro caos na cidade. 
                    </p>
                    <a href="https://www.youtube.com/watch?v=q8ncjHylG6c" target="_blank">Assistir agora</a>
                </SinopsePoster>

                <Movies>
                    {rows?.map(({title, path}, index) => (
                        <Row key={index} title={title} path={path} setModal={setModal} setPreviewMovie={setPreviewMovie}/>
                    ))}
                </Movies>
            </Content>

            <FooterHome/>
            {modal && <Modal setModal={setModal} previewMovie={previewMovie}/>}
        </Container>
    )
}

export default Home