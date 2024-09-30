import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

const router = createHashRouter([
  { 
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'resep',
        element: <RecipePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App