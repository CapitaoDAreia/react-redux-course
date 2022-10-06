import React from "react";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import * as CSS from 'csstype';
import { BrowserRouter } from 'react-router-dom'

/*
    Para navegar pela aplicação, utilizamos uma lib chamada ReactRouterDOM.

    O ReactRouterDOM funciona, neste caso, da seguinte forma:

    Link > URL > Route > Routes > Router

    LINK > Você clica em um elemento link que adiciona um path na URL

    ROUTE > O Route reconhece a URL e renderiza o elemento que foi passado para ele de acordo com a URL, que também foi passada

    ROUTES > O elemento Route precisa estar envolto do elemento ROUTES

    ROUTER / BROWSERROUTER > Envolve todo o conteúdo da aplicação
    que será renderizado

*/

const AppStyle: CSS.Properties = {
    display: 'flex',
    height: '100vh',
}

type AppProps = {}

const App = (props: AppProps) => {
    return (
        <div style={AppStyle} >
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    )
}
export default App