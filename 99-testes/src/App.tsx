import React from "react";
import './App.scss'
import ComponentsInheritanceTestFather from "./components/basics/IheritanceOfChildrens/ComponentsInheritanceTestFather";
import ComponentsInheritanceTestSon from "./components/basics/IheritanceOfChildrens/ComponentsInheritanceTestSon";

export default () => {

    const funcPropDoPai = ():string=>{
        return `Propriedade do pai`
    }

    return <div className="app">

        <h1>React Fundamentals Tests</h1>

        <h2>Test 1</h2>
        <ComponentsInheritanceTestFather prop1={funcPropDoPai()}>
            <ComponentsInheritanceTestSon name="filho 1" />
            <ComponentsInheritanceTestSon name="filho 2" />
            <ComponentsInheritanceTestSon name="filho 3" />
            <ComponentsInheritanceTestSon name="filho 4" />
        </ComponentsInheritanceTestFather>

    </div>
}