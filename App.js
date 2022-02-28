import React from "react";
import { useRoutes } from 'react-router-dom'; // 라우팅
import { Bmi, Calc, Grade, Login, Counter, Lotto } from './components/index'
import Home from "./pages/Home";

export default function App () {
  return useRoutes([
    { path : "/", element : <Home/> },
    { path : "bmi", element : <Bmi/> },
    { path : "calc", element : <Calc/> },
    { path : "grade", element : <Grade /> },
    { path : "login", element : <Login/> },
    { path : "counter", element : <Counter/> },
    { path : "lotto", element : <Lotto/> }
  ]);
}