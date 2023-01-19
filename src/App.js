import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

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
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    let { data: newUser } = await axios.post
    ( "http://localhost:3004/users", 
    { name: inputName.current.value, 
      age: inputAge.current.value 
    }
    )

    setUsers ([...users, newUser ])

  }


  useEffect(()=>{

    async function fetchUsers(){
      let {data: newUsers } = await axios.get("http://localhost:3004/users")
      setUsers(newUsers)
    }
    fetchUsers()
  },[])

   async function deleteUser (userID) {
    await axios.delete(`http://localhost:3004/users/${userID}`)
    const trashUser = users.filter(user => user.id !== userID)
    setUsers(trashUser)
  }

  return (
    <Container>
      <Img alt='Logo-Imagem' src={Image} />

      <ContainerItens>
        <H1>Olá!</H1>

        <LabelInput>Nome</LabelInput>
        <Input ref={inputName}/>

        <LabelInput>Idade</LabelInput>
        <Input ref={inputAge}/>

        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta-avançar' src={Arrow} />
        </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser (user.id)}>
                <img src={Trash} alt="Botão-excluir" />
              </button>
            </User>
          ))
          }
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;
