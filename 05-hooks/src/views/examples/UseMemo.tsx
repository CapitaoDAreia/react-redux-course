import React, { useMemo, useState } from 'react'
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
    O Hook useMemo returna um valor memorizado. Pense em memorização como o cacheamento
    de um valor, assim não existe a necessidade de recalculá-lo.

    O useMemo somente é retornado quando uma de suas dependências é atualizada, isso pode
    melhorar a performance.

    Basicamente, o useMemo tem como função principal poupar recursos de processamento
    evitando renderizações desnecessárias.

    O useMemo só será executado quando as variáveis em seu array de dependência forem modificadas.

*/

function sum(a:number, b:number):number | undefined{

    const future = Date.now() + 2000
    while(Date.now() < future){}
    
    return a + b
}

const UseMemo = (props:{}) => {

    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [n3, setn3] = useState(0)

    const result = useMemo(() => sum(n1, n2), [n1, n2] )

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title="Entendendo o comportamento do componente" />

            <div style={DivStyle} >
                <input type="number" value={n1} onChange={e => setn1(parseInt(e.target.value))} />
                <input type="number" value={n2} onChange={e => setn2(parseInt(e.target.value))} />
                <input type="number" value={n3} onChange={e => setn3(parseInt(e.target.value))} />
                <span>{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
