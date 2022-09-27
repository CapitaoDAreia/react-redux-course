import React from "react";

/*
    Neste componente os valores estão sendo recebidos no APP, quando chamamos o componente,
    e recebidos e tratados aqui.
*/

interface ParameterProps {
    num1: number
    num2: number
}

export default (props: ParameterProps) => {
    const randomNumber:number =  Math.floor(Math.random() * (props.num2 - props.num1) + props.num1)
    return (
        <div style={{backgroundColor: 'grey', color: 'black', padding:'5px', margin: '5px'}}>
            <h2>RANDOM</h2>
            <h3>Os parâmetros recebidos foram: {props.num1} e {props.num2}</h3>
            <h3>O random gerado é {randomNumber}</h3>
        </div>
    );
}
