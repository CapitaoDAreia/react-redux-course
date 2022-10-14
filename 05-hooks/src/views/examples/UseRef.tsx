import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import * as CSS from 'csstype'



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
    width: '200px',
    textAlign: 'center'
}


/*
    Neste primeiro exemplo deste hook, nós invocamos o useRef passando 0 como valor
    inicial para count. Count é um objeto que possui a chave current, que por sua vez,
    determina quantas vezes o componente foi renderizado. Perceba que neste caso estamos
    utilizando um useEffect para controlar a mutabilidade do componente em questão.

    O useRef pode ser utilizado quando quisermos persistir valores entre renderizações, armazenando
    o valor de uma variável mutavel sem provocar uma renderização ou para acessar diretamente um
    elemento DOM.

*/

const UseRef = (props: {}) => {

    //1
    const [value1, setValue1] = useState("")
    const count = useRef(0)
    useEffect(function(){
        count.current ++
    }, [value1])
    
    //2 - Um elemento DOM foi referenciado dentro do useRef e acessado no código apartir de uma variável
    type ReceivedRef = {elementEx2: HTMLInputElement}
    const [valueEx2, setvalueEx2] = useState("")
    const elementEx2 = useRef<HTMLHeadingElement>(null)

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01 - Armazenando número de renders com current" />
            <div style={DivStyle} >
                <div>
                    <span>Valor: </span>
                    <span>{value1} [</span> <span>{count.current}</span> <span>]</span>
                </div>
                <input type="text" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>


            <SectionTitle title="Exercício #02 - Referenciando elemento DOM" />
            <div style={DivStyle} >
                <h1 ref={elementEx2} >Abra o console</h1>
                <button onClick={()=> {console.log(elementEx2.current)}} > Clique </button>
            </div>
        </div>
    )
}

export default UseRef
