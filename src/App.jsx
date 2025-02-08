import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Beef from "./Components/Category/Beef/Beef";
import Breakfast from "./Components/Category/Breakfast/Breakfast";
import Chicken from "./Components/Category/Chicken/Chicken";
import Dessert from "./Components/Category/Dessert/Dessert";
import Goat from "./Components/Category/Goat/Goat";
import Lamb from "./Components/Category/Lamb/Lamb";
import Miscellaneous from "./Components/Category/Miscellaneous/Miscellaneous.jsx";
import Pasta from "./Components/Category/Pasta/Pasta";
import Pork from "./Components/Category/Pork/Pork";
import Seafood from "./Components/Category/Seafood/Seafood";
import Side from "./Components/Category/Side/Side";
import Starter from "./Components/Category/Starter/Starter";
import Vegan from "./Components/Category/Vegan/Vegan";
import Vegetarian from "./Components/Category/Vegetarian/Vegetarian";
import Error from "./Components/Error/Error";
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails.jsx";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/Category/beef", element: <Beef /> },
        { path: "/Category/breakfast", element: <Breakfast /> },
        { path: "/Category/chicken", element: <Chicken /> },
        { path: "/Category/dessert", element: <Dessert /> },
        { path: "/Category/goat", element: <Goat /> },
        { path: "/Category/lamb", element: <Lamb /> },
        { path: "/Category/miscellaneous", element: <Miscellaneous /> },
        { path: "/Category/pasta", element: <Pasta /> },
        { path: "/Category/pork", element: <Pork /> },
        { path: "/Category/seafood", element: <Seafood /> },
        { path: "/Category/side", element: <Side /> },
        { path: "/Category/starter", element: <Starter /> },
        { path: "/Category/vegan", element: <Vegan /> },
        { path: "/Category/vegetarian", element: <Vegetarian /> },
        { path: "/recipeDetails/:id", element: <RecipeDetails /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;
