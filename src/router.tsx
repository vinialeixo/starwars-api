import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Personagens from "./pages/Personagens";
import Planets from "./pages/Planetas";
import Naves from "./pages/Naves";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/planetas" element={<Planets />} />
        <Route path="/naves" element={<Naves />} />
      </Route>
    </Routes>
  );
};

export default Router;
