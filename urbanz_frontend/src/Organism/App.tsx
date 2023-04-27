import React from "react";
import logo from "./logo.svg";
import { Route, Router, Routes, useParams } from "react-router";
import Login from "../Molecules/Login";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Page/Home";
import Page1 from "../Page/Page1";

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Page1 />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

    //<Layout />
  );
}

export default App;
