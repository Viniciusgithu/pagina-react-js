import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
  Container,
  Img,
  ContainerItens,
  H1,
  Button,
  User
} from './style'

import Perfis from '../../assets/perfis.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/lixeira.svg'

function Users() {

  let [users, setUsers] = useState([])
  const navigate = useNavigate()


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

  function goBack(){
    navigate("/")

  }

  return (
    <Container>
      <Img alt='Logo-Imagem' src={Perfis} />

      <ContainerItens>
        <H1>Usuários</H1>

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

        <Button onClick={goBack}>
        <img alt='seta-avançar' src={Arrow}/> Voltar
        </Button>


      </ContainerItens>
    </Container>
  );
}

export default Users;
