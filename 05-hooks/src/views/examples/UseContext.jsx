import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'


/*
    De acordo com a documentação W3C, o React Context é uma forma de gerenciar estado de forma global. POde ser
    utilizado com o Hook useState para compartilhar estados em camadas mais profundas de componentes aninhados mais
    facilmente que com o useState por si só.

    Confira o componente Store em src/data para entender melhor o funcionamento da ContextApi.

*/

const UseContext = (props) => {

    const { number, text, setNumber } = useContext(AppContext) //Aqui nós usamos o contexto, criado e exportado em Store, através do Hook useContext, desestruturando os valores que este contexto carrega e manipulando-os nos buttons desse componente através dos eventos de click.

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #02" />
            <div className='center' >
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => { setNumber(number - 1) }}>-1</button>
                    <button className="btn" onClick={() => { setNumber(number + 1) }}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
