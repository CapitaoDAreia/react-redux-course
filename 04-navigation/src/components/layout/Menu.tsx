import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type MenuProps = {

}
const MenuStyled = styled.aside`
    display: flex;
    flex-basis: 100px;
    background-color: #1E90ff;

    nav{
        flex: 1
    }

    ul{
        list-style: none;
        padding: 0;

        li{
            display: flex;

            a{
                flex: 1;
                margin-bottom: 10px;
                padding: 10px;

                text-decoration: none;
                color: #FFF;

                &:hover{
                    background-color: #00000010;
                }
            }
        }
    }
`;

const Menu = (props: MenuProps) =>{
    return(
        <MenuStyled>
            <nav>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/param/myParameter1">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/myParameter2">Param #02</Link>
                </li>
                <li>
                    <Link to="/anywhere">Teste 404</Link>
                </li>
            </ul>
            </nav>
        </MenuStyled>
    )
}

export default Menu