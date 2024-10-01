import { RouterProvider, createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

const router = createHashRouter([
  { 
    path: "/",
    element: <HomePage />, // Directly use HomePage as the main element
  },
  {
    path: "resep/:recipeId",
    element: <RecipePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
