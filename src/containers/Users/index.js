import React, { useState,  useEffect } from "react";

import { useNavigate } from "react-router";

import { H1 } from "../../components/title/styles";

import {ContainerItens}  from "../../components/ContainerItens/styles";

import {Button} from "../../components/button/styles"

import axios from "axios";

import avatar from '../../assets/avatar.svg';

import Arrow from '../../assets/arrow.svg';

import Trash from '../../assets/trash.svg';

import { Container,  Image,  User } from './styles';

function Users() {


  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() =>{
    async function fetchUsers(){

      
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)

    }

    fetchUsers()

  }, [])

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`)

    const newUsers = users.filter((user) => user.id !== userid)

    setUsers(newUsers)

  }

  function gobackpage(){
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-image" src={avatar} />
      <ContainerItens isBlur={true} >
        <H1> Usuários </H1>
      
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={gobackpage}>
        <img alt="seta" src={Arrow} />Voltar </Button>

      </ContainerItens>

    </Container>
  );
}

export default Users;