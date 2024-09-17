import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
    display:flex;
    flexDirection: row;
    justify-content: flex-end;
    background: lightgrey;
`
 const StyleLink = styled(Link)`
    color: black;
    text-decoration: none;
    backgroundColor:blue;
    padding:5px;
    margin:5px 25px ;
 `



function Navbar(){
    return <StyledNavbar>
        <StyleLink to="/">Home</StyleLink>
        <StyleLink to="/overview">Cards</StyleLink>
        <StyleLink to="/form">Form</StyleLink>
        <StyleLink>Sign up</StyleLink>
    </StyledNavbar>

}

export default Navbar;