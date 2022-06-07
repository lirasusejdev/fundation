import React from 'react'
import ReactJoyride from 'react-joyride'
import Modal from './components/basicos/Modal'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import { Button } from '@grupoboticario/flora-react'

export default props => {
  return (
    <div id="app">
      <h1>Onboarding Flora</h1>
      <h2>Guide your users through a tour of your app.</h2>
      <Button>Start Tour</Button>
      <Card titulo="Exemplo de Card"></Card>
      <Card titulo="Fragmento">
        <Modal>Teste</Modal>
        <ReactJoyride>Teste</ReactJoyride>
      </Card>
      <Card titulo="ComParametros">
        <ComParametros titulo="Situacao do Aluno" aluno="Pedro" nota="5.5" />
        <ComParametros titulo="Situacao do Aluno" aluno="Elisa" nota="10" />
      </Card>
      <Fragmento />
      <ComParametros titulo="Situacao do Aluno" aluno="Pedro" nota="5.5" />
      <ComParametros titulo="Situacao do Aluno" aluno="Elisa" nota="10" />
      <Primeiro></Primeiro>
    </div>
  )
}
