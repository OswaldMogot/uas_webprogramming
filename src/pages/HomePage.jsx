import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Ensure this is from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiurl = "https://dummyjson.com/recipes";
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <>
      <div className="h-72 flex justify-center items-center">
        <h1 className="font-bold text-5xl">
          Kitchen Tales Recipe Library
          <br />
          <span className="text-base">Discover the best recipes for your kitchen</span>
        </h1>
      </div>
      <div className="gap-8 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card bg-base-400">
            <img
              className="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.name}
            />
            <div className="p-6">
              <h3 className="font-bold text-xl">{recipe.name}</h3>
              <p>{recipe.ingredients.join(", ")}</p> {/* Assuming ingredients is an array */}
            </div>
            <div className="card-button flex justify-center">
              <Link to={'resep/ + recipe.id '} className="btn btn-primary">Let's Cook</Link> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
