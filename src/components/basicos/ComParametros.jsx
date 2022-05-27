import React from 'react'
export default function ComParametros(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Recuperacao'
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {props.nota} e foi <strong>{status}</strong>
      </p>
    </div>
  )
}
