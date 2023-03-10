import { all } from "axios";
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChampionById } from "../container/Champions/ChampionById";
import { Home } from "../Pages/Home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/:id" element={<ChampionById />} />
            </Routes>

        </BrowserRouter>
    )
}
export default Router;



const findMineur = () => {
    const object = [
        {
            name: "nassim",
            age: 25
        },
        {
            name: "tesnim",
            age: 15,
        },
        {
            name: "ahmed",
            age: 17,
        },
        {
            name: "malika",
            age: 27,
        },
        {
            name: "intru",
            age: 17,
        }
    ];
    let mineur = object.filter((min) => min.age < 18);
    let add = 5
    let majeur = mineur.age + add
    return majeur

}