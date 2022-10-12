import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import * as CSS from 'csstype'
import SectionTitle from '../../components/layout/SectionTitle'


/*
    O useEffect é um Hook que nos permite executar uma ação assim que determinado componente 
    é renderizado ou sofre alterações em seu estado. 

    No caso abaixo, temos 3 controles de estado  diferentes, sendo eles para text, color e number.

    No useEffect, passamos color como alvo em um array de dependências, o que quer dizer que
    tudo o que está dentro da callback do useEffect será executado quando color sofrer uma 
    atualização de estado.

    Este é o conceito principal deste hook, que se baseia no efeito colateral de uma ação
    para desencadear outras ações dentro do código.

    Doc para consulta: https://reactjs.org/docs/hooks-effect.html
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
    width: '200px',
    textAlign: 'center'
}


const UseEffect = (props: {}) => {
    const [text, setText] = useState('text')
    const [color, setColor] = useState('blue')
    const [number, setNumber] = useState(0)

    useEffect(function(){
        setNumber(number + 1)
        setText(`A cor mudou ${number+1} vezes`)
    }, [color])

    //Desafio
    const [value, setValue] = useState('1')
    const [status, setStatus] = useState('1')
    useEffect(function(){

        let valueField = parseInt(value)
        valueField % 2 === 0 ? setStatus('Par') : setStatus('Ímpar')
    })

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #02 - useEffect" />
            <div style={DivStyle} >
                <input
                    style={
                        {
                            ...ComponentsStyle,
                            ...{ color: `${color}` }
                        }
                    }

                    type="text"
                    value={text} 
                    readOnly
                    />

                <button 
                style={ComponentsStyle}
                onClick={()=>{setColor(color ==='blue'? 'red' : 'blue')}}
                 >Change Text Color</button>
            </div>

            <SectionTitle title="Desafio - useEffect" />
            <div style={DivStyle}>
                <span>Status: {status}</span>
                <input type="number" onChange={(e)=>{setValue(e.target.value)}} />
            </div>
        </div>
    )
}
 
export default UseEffect
