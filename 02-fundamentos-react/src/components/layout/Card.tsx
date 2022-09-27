import React from "react";
import './Card.scss'
import * as CSS from 'csstype'

/*
    Utilizando a tipagem CSS, criamos uma const para armazenar os propriedades de estilo
    recebidas via props, passadas quando os componentes são declarados no APP.

    Assim, podemos dinamizar as propriedades de estilo do componente, tornando-o dinâmico
    em diversos aspectos.
*/


export default (props: any) => {
    const CardStyle: CSS.Properties = {
        backgroundColor: props.color || 'none',
        borderColor: props.color || 'none'
    }

    return (
        <div className="cards" style={CardStyle}>
            <div className="title" >{props.title}</div>
            <div className="content" >
                {props.children}
            </div>
        </div>
    );
}