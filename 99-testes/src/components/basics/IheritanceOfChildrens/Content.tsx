import React from 'react'
import * as CSS from 'csstype'
import { Route, Routes } from 'react-router-dom'
import Screen1 from '../../view/Screen1'
import Screen2 from '../../view/Screen2'
import Home from '../../view/Home'


type Screeen2Props = {

}

const ContentStyles: CSS.Properties = {
    backgroundColor: 'red',
    margin: '0px',
    height: '100%'
}

const Content = (props: Screeen2Props) => {
    return (
        <div style={ContentStyles} >
            <Routes>
                <Route path='/screen1' element={<Screen1 />} />
                <Route path='/screen2' element={<Screen2 />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Content