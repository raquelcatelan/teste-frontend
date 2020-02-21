import React from 'react'

function Seletor(props){
    return(
        <select onChange={props.onChange} className={props.classeSelect}>{props.children}</select>
    )
}

export default Seletor