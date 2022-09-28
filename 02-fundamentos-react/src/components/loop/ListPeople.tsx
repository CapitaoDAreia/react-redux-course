import React from 'react'
import alunos from '../data/alunos'

/*
   Utilizando o método map em cima de uma lista, neste caso a variável alunos importada, podemos
   renderizar elementos em loop, de forma dinâmica.

*/

export default (props: any) => {

    const allAlunos = alunos.map(aluno => {
        return <li>
            {aluno.id}  {aluno.nome} {aluno.nota}
        </li>
    })

    return (
        <div>
            <ul style={{listStyle: 'none', textAlign: 'left'}}>
                {allAlunos}
            </ul>
        </div>
    )
}