import { Container } from '@material-ui/core';
import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default ({isAuthenticated, setAuthenticated}) => {

    return (
        <>
            <Header isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
};
