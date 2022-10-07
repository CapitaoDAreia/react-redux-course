import React from "react";
import {useParams} from 'react-router-dom'


/*
    In the link element of ReactRouterDOM, the parameter
    provided in the URL path is render here trought the 
    useParams function. All we need to do is provide the
    parameter in Link element and declare them in the Route
    element. 

*/
const Param = (props: {}) => {
    const { parameter } = useParams();
    return (
        <div style={{display: 'flex', flexDirection: 'column'}} >
            <h2>Parameter in URL:</h2>
            <h3>{parameter}</h3>
        </div>
    )
}

export default Param