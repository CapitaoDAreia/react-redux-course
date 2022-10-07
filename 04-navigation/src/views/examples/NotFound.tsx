import React from "react";

/*
    To any URL that not exists you must provide a Route
    with a * character as a path and a page for the 404
    error as the elemento to be render by ReactRouterDOM.
*/

const NotFound = (props: {}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}} >
            <h1>Erro 404</h1>
            <h2>A URL não foi encontrada...</h2>
        </div>
    )
}

export default NotFound