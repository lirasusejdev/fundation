import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametros titulo="Situacao do Aluno" aluno="Pedro" nota="5.5" />
    <ComParametros titulo="Situacao do Aluno" aluno="Elisa" nota="10" />
  </div>,
  document.getElementById('root')
)
