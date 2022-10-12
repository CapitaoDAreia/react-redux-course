import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

/*
    OS hooks são formas de extrair e reutilizar lógica de componentes com estado.
    Foram basicamente desenvolvidos pensando em componentes funcionais, já que trazem
    a estes funcionalidades e possibilidades antes imagináveis apenas em componentes
    de classe.

    Segundo a documentação:

    With Hooks, you can extract stateful logic from a component so it can be tested independently and reused.
    Hooks allow you to reuse stateful logic without changing your component hierarchy.

    Vamos explorar essa bagaça, papai! \0/
*/

const App = props => {

    return (
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
    )
}

export default App