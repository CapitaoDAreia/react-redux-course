import React from 'react'
import * as CSS from 'csstype'

type Screeen2Props = {

}

const Screen2Styles:CSS.Properties = {
    backgroundColor: 'red',
    height: '100vh'
}

const Screen2 = (props: Screeen2Props) =>{
    return(
        <h1 style={Screen2Styles} >Essa é a tela 2</h1>
    )
}

export default Screen2



