import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import * as CSS from 'csstype'

/*
    Basicamente, o useState serve para acessar o estado de um componente/variável, para
    manipular este estado, alterar, controlar. 

    https://reactjs.org/docs/hooks-state.html


    Passo 1 - Declaramos as variáveis, de forma simples, utilizando destructuring em array para
    capturar a função e variável que precisamos.

    Passo 2 - Utilizamos o valor da variável que sofrerá mudanças de estado.

    Passo 3 - Utilizamos um click para modificar o valor da variável em questão através de uma função provida
    pelo Hook.

*/

const DivStyle: CSS.Properties = {
    backgroundColor: 'lightgrey',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '5px'
}

const ComponentsStyle: CSS.Properties = {
    width: '100px'
}

const UseState = (props: {}) => {

    // #01
    const [number, setNumber] = useState(0);

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"/>

            <SectionTitle title="Exercício #01 - Manipulando estados" />

            <div style={DivStyle} >

                {/* #02 */}
                <div style={ComponentsStyle} >{number}</div>
                
                {/* #03 */}
                <button style={ComponentsStyle} onClick={()=>{setNumber(number + 1)}} >+1</button>
                <button style={ComponentsStyle} onClick={()=>{setNumber(number - 1)}} >-1</button>
            </div>
        </div>
    )
}

export default UseState
