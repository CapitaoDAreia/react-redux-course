import React from "react";

/*
    Renderização condicional, ou seja, um componente é renderizado com base na verificação de uma condição.
    Neste caso, avaliamos se o number da props é par ou ímpar e com base nisso retornamos uma condição.
*/

export default (props: {number: number}) => {
    const evenOrOdd = props.number % 2 === 0 ? <span>Even</span> : <span>Odd</span>
    return (
        <div>
            {evenOrOdd}
        </div>
    )
}