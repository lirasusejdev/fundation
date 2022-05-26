import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametros titulo="Segundo Componente" subtitulo="MUITO LEGAL!" />
  </div>,
  document.getElementById('root')
)
