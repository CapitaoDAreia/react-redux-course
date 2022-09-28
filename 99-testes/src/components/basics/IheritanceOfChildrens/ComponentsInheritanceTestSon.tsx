import React from 'react'

export default (props: any) =>{
    return(
        <div style={{border: '1px solid white'}}>
            <h2>Eu sou o componente {props.name}.</h2>
            <h3>Herdei do meu pai: {props.prop1}</h3>
        </div>
    )
}