import React from "react";
import DirectCommSon from "./DirectCommSon";

/*
    Falando da comunicação entre os componentes, perceba que aqui há um exemplo perfeito
    de comunicação direta. O componente em questão, no qual estamos agora, é o componente pai.
    O componente filho é declarado dentro deste. Se você for no componente filho, perceberá que ele
    é construído de modo que está pronto para receber as propriedades do seu pai, e quando invocado dentro do
    pai, quando a relação de pai e filho é estabelecida entre os dois componentes, o filho pode acessar as
    propriedades de sei pai diretamente.

    É disso que estamos falando quando falamos de comunicação direta, pois de forma direta e muito simples
    o filho herda as propriedades de seu pai.
*/

export default (props: {patrimony: string})=>{
    return(
        <div style={{backgroundColor: 'darkblue', color: 'white', padding: '5px'}}>
            <h2>Father Component</h2>
            <div>{props.patrimony}</div>
            <DirectCommSon inherit={props.patrimony} />
        </div>
    )
}