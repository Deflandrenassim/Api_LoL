import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../Pages/Home/Home";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>

        </BrowserRouter>
    )
}
export default Router;