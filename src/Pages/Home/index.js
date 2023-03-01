import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Img,
  ContainerItens,
  H1,
  LabelInput,
  Input,
  Button,
} from './style'

import Image from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

function App() {

  let [users, setUsers] = useState([])
  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    let { data: newUser } = await axios.post
    ( "http://localhost:3004/users", 
    { 
      name: inputName.current.value, 
      age: inputAge.current.value 
    }
    )
    

    setUsers ([...users, newUser ])

    navigate("/users")

  }


  return (
    <Container>
      <Img alt='Logo-Imagem' src={Image} />

      <ContainerItens>
        <H1>Cadastros</H1>

        <LabelInput>Nome</LabelInput>
        <Input ref={inputName}/>

        <LabelInput>Idade</LabelInput>
        <Input ref={inputAge}/>

        <Button onClick={addNewUser} to="/users">
          Cadastrar <img alt='seta-avançar' src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;
