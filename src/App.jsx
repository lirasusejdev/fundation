import React from 'react'

import Card from './layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'

export default props => {
  return (
    <div id="app">
      <h1>Fundamentos React (Arrow)</h1>
      <Fragmento />
      <ComParametros titulo="Situacao do Aluno" aluno="Pedro" nota="5.5" />
      <ComParametros titulo="Situacao do Aluno" aluno="Elisa" nota="10" />
      <Primeiro></Primeiro>
    </div>
  )
}
