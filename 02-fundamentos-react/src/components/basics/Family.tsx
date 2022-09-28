import React, { cloneElement } from "react";
import FamilyMember from './FamilyMember'

/*
    COMPONENTES COMO FILHOS

    Existem diversas formas de receber componentes como filhos de componentes maiores e tratá-los dentro do componente pai.

    #01 - Na primeira forma, chamamos dentro do componente pai o componente filho, passando para ele suas a PROP ESPECÍFICA do componente pai, o que pode ser feito
    também passando todas as props por meio do destructuring.

    #02 - Na segunda forma usamos o React.cloneElement, mas este método só pode ser utilizado caso o elemento pai receba somente uma children em sua invocação.

    #03 - Já na terceira forma, e também mais interessante, nós invocamos um elemento do React, a children, e depois um método que incide
    sobre ele. Esse elemento React é um array e por padrão recebe o método map. Assim, podemos invocar o map em cima dele passando como primeiro
    parâmetro o array de childrens que existe nas props do componente pai, e como segundo, uma função que vai iterar sobre esse array e trazer cada
    um desses elementos filhos no retorno. Repare que o retorno também recebe as props do elemento pai, ou seja, os filhos herdam as características do elemento pai.

*/

export default (props: any) => {
    return (
        <>
            {/*#01 - Primeira forma */}
            <FamilyMember
                name="Peter"
                lastname={props.lastname} />

            <FamilyMember
                name="Alice"
                {...props} />
            
            {/*#02 - Segunda forma */}

            {/* <div>
                {React.cloneElement(props.children, props)}
            </div> */}



            {/*#03 - Terceira forma e mais interessante */}

            <div id="members-receiver">
                {
                    React.Children.map(props.children, (el) => {
                        console.log(props.children)
                        return React.cloneElement(el, props)
                    })
                }
            </div>
        </>
    )
}