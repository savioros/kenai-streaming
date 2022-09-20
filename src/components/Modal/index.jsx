import React, { useState } from 'react'
import { Container, Content, Description, Poster } from './styles'

function Modal({ setModal, previewMovie }) {
    function closeModal(target, currentTarget){
        if(target == currentTarget) setModal(false)
    } 

    return (
        <Container onClick={({ target, currentTarget }) => closeModal(target, currentTarget)}>
            <Content>
                <Poster pathImage={`https://image.tmdb.org/t/p/original${previewMovie.backdrop_path}`}>
                    <button onClick={({ target, currentTarget }) => closeModal(target, currentTarget)}>X</button>
                </Poster>

                <Description>
                    <div>
                        <h2>{previewMovie.title || previewMovie.name}</h2>
                        <span>Nota: {(previewMovie.vote_average).toFixed(1)}</span>
                    </div>
                    <p>{previewMovie.overview}</p>
                </Description>
            </Content>
        </Container>
    )
}

export default Modal