import React, { useContext } from "react";
import { DatosContext } from "../../DataContext";

export const NewRecipeItem = () => {
  const first = useContext(DatosContext);
  const reqicons = require.context("../../assets/icons", true);

  return (
    <>
      <div className="container__new-recipe-items">
        {first.map((item, i) => (
          <div key={i} id="cont" className="container__new-recipe-item">
            <img className="recipeimage" src={`${item.image}`} alt="comida1" />
            <div className="container__new-recipe-item-text">
              {item.title % 2 === 0 ? (
                <h1>
                  {item.title.slice(0, item.title.length / 2)}
                  <span>
                    {item.title.slice(
                      item.title.length / 2 + 1,
                      item.title.length
                    )}
                  </span>
                </h1>
              ) : (
                <h1>
                  {item.title.slice(0, item.title.length / 2)}
                  <span>
                    {item.title.slice(item.title.length / 2, item.title.length)}
                  </span>
                </h1>
              )}

              <div className="container__star-fav">
                <img
                  className="star"
                  src={reqicons("./ic_star.svg")}
                  alt="icon"
                />
                <h2>{item.aggregateLikes}</h2>
                <img
                  className="fav"
                  src={reqicons("./ic-favorite.svg")}
                  alt="icon"
                />
              </div>
            </div>
            <div className="container__new-recipe-item-info">
              <img
                className="portion"
                src={reqicons("./ic_portion.svg")}
                alt="icon"
              />
              <h1>Tamaño de la porcion</h1>
              <h2>{item.servings} Raciones</h2>
              <img
                className="time"
                src={reqicons("./ic_time.svg")}
                alt="icon"
              />
              <h1>Tiempo de preparacion</h1>
              <h2>{item.readyInMinutes}</h2>
              <img
                className="chef"
                src={reqicons("./ic_chef.svg")}
                alt="icon"
              />
              <h1>Dificultad</h1>
              <h2>Facil</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
