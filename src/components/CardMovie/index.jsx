import React from 'react'
import { Card } from './styles'

const imageHost = "https://image.tmdb.org/t/p/w500"

function CardMovie({ pathImage }) {
    return (
        <Card src={`${imageHost}${pathImage}`} alt="" />
    )
}

export default CardMovie