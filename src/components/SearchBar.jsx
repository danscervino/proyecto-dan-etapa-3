import { Link } from "react-router-dom";
import CarritoContext from "../context/CarritoContext";
import React, { useContext, useEffect } from "react";

const SearchBar = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img className="foto-logo" src="img/logo_montana_2.webp" alt="Logo montaña"/>
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">
          Buscar
        </label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="carrito-icono">
        <Link to="carrito">
        <img className="foto-carrito" src="img/cart.webp" alt="Carrito"/>
          Carrito
        </Link>
        {cantidadTotal > 0 && (
          <span className="carrito-cantidad">({cantidadTotal})</span>
        )}
      </div>

      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
