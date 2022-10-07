import React from "react";
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Content from "./components/basics/IheritanceOfChildrens/Content";
import Header from "./components/basics/Header";

export default () => {

    const funcPropDoPai = (): string => {
        return `Propriedade do pai`
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Content />
            </BrowserRouter>
        </div>)
}