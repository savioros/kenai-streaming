import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import CardMovie from '../CardMovie'
import { Container } from './styles'

function Row({ title, path }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    async function getMovies(){
        try{
            const response = await api.get(path)
            setMovies(response.data.results)
            console.log(movies)
        }catch(error){
            console.log('Error getMovies: ', error)
        }
    }

    return (
        <Container>
            <h2>{title}</h2>
            <ul>
                {movies?.map(({ id, poster_path }) => (
                    <li key={id}>
                        <CardMovie pathImage={poster_path}/>
                        <div></div>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default Row