import React from "react";
import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import About from '../../views/examples/About';
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

/*
    O Routes recebe as rotas (ROUTE), cada uma com seu path e elemento.
    Se o path na URL corresponder ao path na Route o elemento correspondente 
    a Route em questão será renderizado.

    O BrowserRouter receberá o Content com as Routes e as tratará.
*/

const ContentStyled = styled.main`
    display: flex;
    flex-grow: 1;
    background-color: #ddd;
    padding: 30px;
`;

const Content = (props: {}) =>{
    return(
        <ContentStyled>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="/param/:parameter" element={<Param />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ContentStyled>
    )
};

export default Content;