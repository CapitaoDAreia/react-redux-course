import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter'

/*
    REACTDOM - https://pt-br.reactjs.org/docs/rendering-elements.html

    As aplicações React são single pages, e neste caso, todo o conteúdo será renderizado em uma única página, dentro da div root.
    O elemento React responsável pela renderização de todo o conteúdo é o ReactDOM, através do método .render().
    Basicamente, a DOM no navegador é atualizada através da DOM React, que é quem manipulamos de forma direta.

    
    ELEMENTOS JSX(TSX) - Característicos do REACT, os elementos JSX suportam a escrita de marcação e lógica no mesmo arquivo, pois, como
    consta na documentação, o React, ao invés de separar tecnologias as colocando em arquivos diferentes, separando lógica e marcação, separa
    preocupações com unidades chamadas de componentes que contém tanto lógica quanto marcação. 


*/


ReactDOM.render(
    <div id="app" >
        <First/>
        <WithParameter
            title="Second Component"
            subtitle="WithParameter Component"
            propsTestType={12}
        />
    </div>, document.getElementById('root')
)