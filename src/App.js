import React, { useState } from 'react'
import {
  Container, 
  Img,
  ContainerItens,
  H1,
  LabelInput,
  Input,
  Button,
  User
} from './style'

import Image from './assets/People.svg'
import Arrow from './assets/Arrow.svg'
import Trash from './assets/Lixeira.svg'

function App() {

    let [users, setUsers] = useState([])
    let [name, setName] = useState()
    let [age, setAge] = useState()

    function addNewUser(){
      setUsers([...users, {id: Math.random(), name, age}])
    }

    function changedInputName(e){
      setName(e.target.value)
    }

    function changedInputAge(e){
      setAge(e.target.value)
    }

  return (
    <Container>
      <Img alt='Logo-Imagem' src={Image}/>

      <ContainerItens>
        <H1>Olá!</H1>

        <LabelInput>Nome</LabelInput>
        <Input onChange={changedInputName}></Input>

        <LabelInput>Idade</LabelInput>
        <Input onChange={changedInputAge}></Input>
        
        <Button onClick={addNewUser}>Cadastrar <img alt='seta-avançar' src={Arrow}/></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button><img src={Trash} alt="Botão-excluir"/></button>
            </User>
          ))
          }
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;
