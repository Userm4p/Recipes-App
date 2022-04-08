import React, { useContext } from "react";
import { DatosContext } from "../../DataContext";

export const NewRecipeItem = () => {
  const first = useContext(DatosContext);
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
                  src='https://i.imgur.com/tMv75sm.jpeg'
                  alt="icon"
                />
                <h2>{item.aggregateLikes}</h2>
                <img
                  className="fav"
                  src='https://i.imgur.com/ruc5Tyl.jpeg'
                  alt="icon"
                />
              </div>
            </div>
            <div className="container__new-recipe-item-info">
              <img
                className="icon"
                src="https://i.imgur.com/dyzSCed.jpeg"
                alt="icon"
              />
              <h1>Tamaño de la porcion</h1>
              <h2>{item.servings} Raciones</h2>
              <img
                className="icon"
                src="https://i.imgur.com/TlfPH7C.jpeg"
                alt="icon"
              />
              <h1>Tiempo de preparacion</h1>
              <h2>{item.readyInMinutes}</h2>
              <img
                className="icon"
                src="https://i.imgur.com/HDitIz5.jpeg"
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
