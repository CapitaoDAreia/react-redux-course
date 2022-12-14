import React from "react";
import './App.scss'
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import First from "./components/basics/First";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import WithParameter from "./components/basics/WithParameter";
import DirectCommFat from "./components/communication/DirectCommFat";
import DirectCommSon from "./components/communication/DirectCommSon";
import IndirectCommFat from "./components/communication/IndirectCommFat";
import OddEven from "./components/conditional/OddEven";
import Counter from "./components/counter/Counter";
import Input from "./components/formulary/Input";
import Card from "./components/layout/Card";
import ListPeople from "./components/loop/ListPeople";
import ListProduct from "./components/loop/ListProduct";
import User from "./components/loop/User";

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


            <Card title="#12 - Class Based Component - Counter" color="#F5534F">
                <Counter initialNumber={10} initialPass={5} ></Counter>
            </Card>

            <Card title="#11 - Controlled Component" >
                <Input />
            </Card>

            <Card title="#10 - Indirect COmmunication Between Components" color="#C5534B">
                <IndirectCommFat />
            </Card>

            <Card title="#09 - Direct Communication Between Components" color="#A1234A">
                <DirectCommFat patrimony="#Father's Patrimony#" />
            </Card>

            <Card title="#08 - Conditional Render" color="#G9811F">
                <OddEven number={21} ></OddEven>
                <User
                name="Igor"
                />
            </Card>

            <Card title="#07 - Loop Chalenge" color="#F9811F">
                <ListProduct />
            </Card>

            <Card title="#06 - Loop Lesson" color="#D3555A">
                <ListPeople
                    family="List People - Repetition"
                ></ListPeople>
            </Card>


            <Card title="#05 - Family Lesson" color="#D3555A">

                <Family lastname="The Wolf" >
                    {/* Declarados aqui e recebidos dentro do componente FAMILYcomo childrens */}
                    <FamilyMember name="August" />
                    <FamilyMember name="Lucas" />
                    <FamilyMember name="Igor" />


                </Family>

            </Card>

            <Card title="#04 - Random Chalenge" color="#D2001A">
                <Random num1={1} num2={50} />
            </Card>


            <Card title="#03 - Fragment Lesson" color="#400D51">
                <Fragment />
            </Card>

            <Card title="#02 - WithParameter Lesson" color="#562B08">
                <WithParameter
                    title="Second Component"
                    subtitle="WithParameter Component"
                    propsTestType={12}
                />
            </Card>

            <Card title="#01 - First Lesson" color="#FD841F">
                <First />
            </Card>
        </div>



    </div>
}