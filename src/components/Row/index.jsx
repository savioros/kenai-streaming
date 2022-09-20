import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import CardMovie from '../CardMovie'
import { Container } from './styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Modal from '../Modal'

function Row({ title, path, setModal, setPreviewMovie }) {
    const [movies, setMovies] = useState([])
    const [scrollX, setScrollX] = useState(0)

    useEffect(() => {
        getMovies()
    }, [])

    async function getMovies(){
        try{
            const response = await api.get(path)
            setMovies(response.data.results)
        }catch(error){
            console.log('Error getMovies: ', error)
        }
    }

    function handleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth / 2)
        
        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    function handleRightArrow(){
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = 0
        if(window.innerWidth > 800){
            listW = (movies.length * 300) + (movies.length * 80 + 15)
        }else{
            listW = (movies.length * 168) + (movies.length * 16 + 25)
        }

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW)
        }
        
        setScrollX(x)
    }

    return (
        <>
            <Container>
                <h2>{title}</h2>
                <div className='arrowLeft' onClick={handleLeftArrow}>
                    <IoIosArrowBack fontSize={50}/>
                </div>
                <div className='arrowRight' onClick={handleRightArrow}>
                    <IoIosArrowForward fontSize={50}/>
                </div>
                <ul style={{marginLeft: scrollX}}>
                    {movies?.map((movie) => (
                        <li key={movie.id} onClick={() => {
                            setModal(true) 
                            setPreviewMovie(movie)
                        }}>
                            <CardMovie pathImage={movie.poster_path}/>
                            <div></div>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    )
}

export default Row