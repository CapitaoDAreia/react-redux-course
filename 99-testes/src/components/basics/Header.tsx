import React from 'react'
import * as CSS from 'csstype'
import { Link } from 'react-router-dom'

type Screeen2Props = {

}

const HeaderStyles: CSS.Properties = {
    backgroundColor: 'darkblue',
    color: 'white'
}

const Header = (props: Screeen2Props) => {
    return (
        <div style={HeaderStyles} >
            <h1  >REACT FUNDAMENTALS: Test</h1>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '5%'}} >
                <Link style={{ color: 'white' }} to="/" >Home</Link>
                <Link style={{ color: 'white' }} to="/screen1" >Screen1</Link>
                <Link style={{ color: 'white' }} to="/screen2" >Screen2</Link>
            </div>
        </div>
    )
}

export default Header