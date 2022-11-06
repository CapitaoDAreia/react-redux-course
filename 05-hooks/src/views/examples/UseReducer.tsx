import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

/*
    De acordo com a documentação do w3c, o useReducer é semelhante ao useState, mas permite
    lidar com estados que dependem de uma lógica mais complexa.

    Assim como descreve a documentação oficial do React, que diz que o useReducer é preferível quando
    temos certa complexidade lógica no gerenciamento de estados que por vezes envolve múltiplos
    sub-valores ou quando o próximo estado depende do estado anterior.

    Basicamente, o useReducer consome uma função, mais comumente denomidada 'reducer' e os valores do estado inicial com o qual vamos lidar. 
    Essa função é a responsável por prover a logica de funcionamento do useReducer e esses valores iniciais determinam quais serão os valores
    controlados por estado.

    Do useReducer desestruturamos em array dois elementos. O primeiro é o elemento 'state', que guarda o estado dos valores iniciais que passamos para
    o useReducer. O segundo elemento é o 'dispatch', este se remete à função 'reducer' para recorrer a lógica dela retornando o estado atualizado por essa lógica.

    Dada a complexidade do tema, esta sessão de estudos foi dedicada a ler e compreender, além de consumir exemplos.

    Exploraremos mais o useReducer na próxima sessão!

*/

const UseReducer = () => {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
