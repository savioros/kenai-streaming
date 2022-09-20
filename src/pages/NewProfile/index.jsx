import React, { useContext, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Button from '../../components/Button'
import HeaderProfiles from '../../components/HeaderProfiles'
import { UserContext } from '../../Contexts/UserContext'
import { Container, Form, Title, User } from './styles'

function NewProfile() {
    const [inputValue, setInputValue] = useState('')
    const [errorInput, setErrorInput] = useState(false)
    const { users, setUsers } = useContext(UserContext)
    const navigate = useNavigate()

    /* let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let colorProfile = `rgba(${r}, ${g}, ${b})` */

    function addNewProfile(e){
        e.preventDefault()
        
        if(inputValue.length > 0 && !inputValue.startsWith(' ')) {
            setUsers([...users, inputValue])
            navigate('/')
        }else{
            setErrorInput(true)
        }
    }

    return (
        <>
            <HeaderProfiles/>
            <Container>
                <Title>Criar perfil</Title>
                <User/>
                <Form onSubmit={addNewProfile}>
                    <input 
                        className={errorInput ? 'error' : ''}
                        onBlur={errorInput ? 'error' : ''}
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