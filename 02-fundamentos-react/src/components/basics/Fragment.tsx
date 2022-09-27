import React from "react";
import * as CSS from 'csstype'

/*
    REACT FRAGMENT

    É um tipo de componente que se comporta como wrapper para conteúdo nos retornos dos componentes funcionais
    REACT. Se invocado desssa forma <></> funciona, mas não permite adicionar propriedades. Já se invocado da
    forma que vemos abaixo, permite a adição de propriedades.
*/

const FragmentStyle: CSS.Properties = {
    backgroundColor: 'yellow',
    color: 'black',
    height: '50px',
    overflowY: 'scroll',
    scrollbarColor: 'red',
    borderRadius: '1rem'
}

export default function Fragment() {
    return (
        <React.Fragment>
            <div style={FragmentStyle}>
                <h2>Fragment</h2>
                <p>This is a fragment</p>
            </div>
        </React.Fragment>
    )
}