import React from 'react'

function List(props){
    return(

        <div className="lista-pokemons" >
        <p>  {props.texto}</p>
        <img src={props.imagem}></img>

        </div>
    )

}

export default List