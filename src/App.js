import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./screens/Home";
import "./styles/App.scss";
import "animate.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}
