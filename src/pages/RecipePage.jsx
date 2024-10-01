import { Link, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";

const RecipePage = () => {
  const { recipeId } = useParams();
  const apiurl = "https://dummyjson.com/recipes/" + recipeId;
  
  const [recipe, setRecipe] = useState(); 
 
  useEffect(() => {
    fetch(apiurl)
    .then((response) => response.json())
    .then((data) => setRecipe(data));
 }, [apiurl]);

  return (
    <div className="p-6">
      <Link to="/" className="btn btn-primary">
        {"<--"} Kembali
      </Link>

      {recipe ? (
        <div>
          <h1 className="text-2xl font-bold">{recipe.name}</h1>
          <h2 className="mt-6 font-semibold">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients ? (
              recipe.ingredients.map((ingredient, i) => (
                <>
                <li>{ingredient}</li>
                </>
              ))
            ) : (
              <li>No ingredients available.</li>
            )}
          </ul>
          <h2 className="mt-6 font-semibold">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions ? (
              recipe.instructions.map((instruction) => (
               <>
                <li>{instruction}</li>
               </>
              ))
            ) : (
              <li>No instructions available.</li>
            )}
          </ol>
        </div>
      ) : (
        <p>Loading...</p> // Show loading message while fetching
      )}
    </div>
  );
};

export default RecipePage;
