import React, { useContext, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Button from '../../components/Button'
import { UserContext } from '../../Contexts/UserContext'
import { Container, Form, Title, User } from './styles'

function NewProfile() {
    const [inputValue, setInputValue] = useState('')
    const { users, setUsers } = useContext(UserContext)
    const navigate = useNavigate()

    /* let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let colorProfile = `rgba(${r}, ${g}, ${b})` */

    function addNewProfile(e){
        e.preventDefault()
        
        if(inputValue) {
            setUsers([...users, inputValue])
            navigate('/')
        }
    }

    return (
        <>
            <Container>
                <Title>Criar perfil</Title>
                <User/>
                <Form onSubmit={addNewProfile}>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={inputValue} 
                        onChange={({ target }) => setInputValue(target.value)}
                    />
                    <div>
                        <Button>Salvar</Button>
                        <Link to="/">Cancelar</Link>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default NewProfile