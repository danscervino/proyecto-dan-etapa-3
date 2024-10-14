import React from "react";
import useTitulo from "../hooks/useTitulo";
import Formulario from "../components/Formulario";
import Tabla from "../components/Tabla";

const Alta = () => {
  useTitulo("Alta");

  return (
    <div className="main">
      <header className="section-cards__header">
        <h1>Formulario de alta de productos</h1>
        <h2>TUS PRODUCTOS</h2>
      </header>

      <Formulario />

      <Tabla />
    </div>
  );
};

export default Alta;
