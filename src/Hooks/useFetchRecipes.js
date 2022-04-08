import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchRecipes = () => {
  const [post, setPost] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=4&apiKey=28ffc30fb17d4f1080164ff89734b8b7"
      )
      .then((response) => {
        setPost({
          data: response.data.recipes,
          loading: false,
        });
      });
  }, []);

  return post;
};
