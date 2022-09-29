import React from "react"
/*
    Um componente que recebe props e com base na avaliação da prop sentence retorna suas childrens.
    Se a avaliação for verdadeira, todo componente que for filho deste será renderizado.
*/
export default<T> (props: {sentence: T, children?: any}): JSX.Element =>{
    return props.sentence ? props.children : false
}