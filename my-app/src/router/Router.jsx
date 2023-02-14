import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../Pages/Home/Home";
import { Champions } from "../Pages/Champions/Champions";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/champion/:id" element={<Champions />} />
            </Routes>

        </BrowserRouter>
    )
}
export default Router;