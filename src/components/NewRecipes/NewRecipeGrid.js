import React from "react";
import { NewRecipeItem } from "./NewRecipeItem";

export const NewRecipeGrid = () => {
  return (
    <>
      <h1 className="title__new-recipes">Nuevas Recetas</h1>
      <div className="container_new__recipes">
        <div className="container__new-recipe-items">
          <NewRecipeItem />
        </div>
      </div>
      
    </>
  );
};
