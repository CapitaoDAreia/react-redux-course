import React from 'react'
import * as CSS from 'csstype'

type Screeen2Props = {

}

const HomeStyles:CSS.Properties = {
    backgroundColor: 'red',
    height: '100vh'
}

const Home = (props: Screeen2Props) =>{
    return(
        <h1 style={HomeStyles} >Home</h1>
    )
}

export default Home



