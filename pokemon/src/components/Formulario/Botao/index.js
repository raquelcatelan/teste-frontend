import React from 'react'

function Botao (props) {
 
  return (
    <button
      onClick={props.onClick}
      className={props.classes}     
    >
      {props.children}
    </button>
  )
}

export default Botao