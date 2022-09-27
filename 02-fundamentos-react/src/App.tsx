import React from "react";
import './App.scss'
import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import WithParameter from "./components/basics/WithParameter";
import Card from "./components/layout/Card";

/*
    REACTDOM - https://pt-br.reactjs.org/docs/rendering-elements.html

    As aplicações React são single pages, e neste caso, todo o conteúdo será renderizado em uma única página, dentro da div root.
    O elemento React responsável pela renderização de todo o conteúdo é o ReactDOM, através do método .render().
    Basicamente, a DOM no navegador é atualizada através da DOM React, que é quem manipulamos de forma direta.

    
    ELEMENTOS JSX(TSX) - Característicos do REACT, os elementos JSX suportam a escrita de marcação e lógica no mesmo arquivo, pois, como
    consta na documentação, o React, ao invés de separar tecnologias as colocando em arquivos diferentes, separando lógica e marcação, separa
    preocupações com unidades chamadas de componentes que contém tanto lógica quanto marcação. 


*/


export default () => {
    return <div className="app">

        <h1>React Fundamentals</h1>
        <div className="wrapper" >
            <Card title="#04 - Random Chalenge" >
                <Random num1={1} num2={50} />
            </Card>


            <Card title="#03 - Fragment Lesson">
                <Fragment />
            </Card>

            <Card title="#02 - WithParameter Lesson" >
                <WithParameter
                    title="Second Component"
                    subtitle="WithParameter Component"
                    propsTestType={12}
                />
            </Card>

            <Card title="#01 - First Lesson" >
                <First />
            </Card>
        </div>



    </div>
}