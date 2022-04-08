import React from "react";

export const Navbar = () => {

    const reqicon = require.context("../../assets/icons", true);

  return (
    <div>
      <nav className="navbar">
        <div className="container__first-item">
          <h1>
            Recipe<span>App</span>
          </h1>
        </div>
        <div className="container__navbar-buttons">
          <h5 className="pointer">Home</h5>
          <h5 className="pointer">Vegetarianos</h5>
          <h5 className="pointer">Platos Pincipales</h5>
          <h5 className="pointer">Tortas</h5>
          <h5 className="pointer">Comida Rapida</h5>
          <h5 className="pointer">Menu Niños</h5>
          <h5 className="pointer">Sopas</h5>
        </div>
        <img className="pointer homeicon" src={reqicon('./ic_home.svg')} alt="home" />
      </nav>
    </div>
  );
};
