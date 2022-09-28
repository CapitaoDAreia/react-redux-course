import React from 'react'

/*
    Perceba que o componete pai recebeu o componente filho lá no App, mas foi aqui dentro do componente
    pai que fizemos o map em cima das childrens utilizando o React clone para renderizar o que foi passado.
*/


export default (props: any) =>{
    return(
        <div>
            <h2>Eu sou o componente pai.</h2>
            {props.children}
        </div>
    )
}