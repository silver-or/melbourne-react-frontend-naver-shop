import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
export default function Navbar () { return (<div>
    <Nav>
        <Ul>
            <Li><Link to={"/"}>Home</Link></Li>
            <Li><Link to={"/bmi"}>Bmi</Link></Li>
            <Li><Link to={"/calc"}>Calc</Link></Li>
            <Li><Link to={"/grade"}>Grade</Link></Li>
            <Li><Link to={"/login"}>Login</Link></Li>
            <Li><Link to={"/counter"}>Counter</Link></Li>
            <Li><Link to={"/lotto"}>Lotto</Link></Li>
        </Ul>
    </Nav>
</div>) }

const Nav = styled.nav`
    background-color: #C3E2DF;
    display: flex;
    justify-content: center;
`

const Ul = styled.ul`
    text-decoration: none;
`

const Li = styled.li`
    float: left;
    margin-left: 1em;
    font-size: 20px;
    text-align: center;
    display: inline-block
`