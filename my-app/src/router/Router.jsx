import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../Pages/Home/Home";
import { Player } from "../Pages/Player/Player";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/player" element={<Player />} />
            </Routes>

        </BrowserRouter>
    )
}
export default Router;