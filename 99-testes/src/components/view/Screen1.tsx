import React from 'react'
import * as CSS from 'csstype'

type Screeen1Props = {

}

const Screen1Styles:CSS.Properties = {
    backgroundColor: 'red',
    height: '100vh'
}

const Screen1 = (props: Screeen1Props) =>{
    return(
        <h1 style={Screen1Styles} >Essa é a tela 1</h1>
    )
}

export default Screen1