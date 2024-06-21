import React, { useState, useRef } from "react";

import { useNavigate } from "react-router";

import axios from "axios";

import People from '../../assets/people.svg';

import Arrow from '../../assets/arrow.svg';

import {H1}  from "../../components/title/styles";

import {ContainerItens}  from "../../components/ContainerItens/styles";

import {Button} from "../../components/button/styles";


import { Container,  Image,  InputLabel, Input } from './styles';

function Home() {


  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  const InputName = useRef()
  const Inputage = useRef()

  async function addNewUser() {

    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: Inputage.current.value
    });

    setUsers([...users, newUsers])

    navigate("/usuarios")

  }



  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens >
        <H1> Olá! </H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={Inputage} placeholder="Idade"></Input>


        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} /> </Button>


      </ContainerItens>

    </Container>
  );
}

export default Home;