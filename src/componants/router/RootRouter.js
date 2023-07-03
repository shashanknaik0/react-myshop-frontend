// noinspection ES6CheckImport
import BlockIcon from '@material-ui/icons/Block';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import Layout from "../layout/Layout";
import Login from "../login/Login";
import ProtectedRoute from "../login/ProtectedRoute";
import Product from "../product/Product";
import Signup from "../signup/Signup";

const RootRouter = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <Router>
            <Routes>
            <Route path="/" element={<Layout isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>}>
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                <Route exact path="/" element={<ProtectedRoute setAuthenticated={setAuthenticated}/>} >
                    <Route exact path='/' element={<Product/>}/>
                </Route>
                <Route exact path="/cart" element={<ProtectedRoute setAuthenticated={setAuthenticated}/>} >
                    <Route exact path="/cart" element={<Cart/>}/>
                </Route>
                <Route exact path="/error" element={<ErrorOutlineIcon/>}/>
                <Route path="*" element={<BlockIcon/>}/>
            </Route>
            </Routes>
        </Router>
    );
};

export default RootRouter;
