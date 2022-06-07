import './Card.css'
import React from 'react'

export default props => {
  return (
    <div className="Card">
      <div className="Title">{props.titulo}</div>
      <div className="Content">Conteudo</div>
      <div className="Modal">Modal</div>
    </div>
  )
}
