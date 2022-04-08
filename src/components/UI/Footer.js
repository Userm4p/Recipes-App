import React from "react";

export const Footer = () => {
  const req = require.context("../../assets", true);
  return (
    <>
      <div className="container__footer">
        <h1>Con el Patrocinio de</h1>
        <img className="footerimg" src={req("./Grupo 7610.png") } alt='footerimg' />
      </div>
    </>
  );
};
