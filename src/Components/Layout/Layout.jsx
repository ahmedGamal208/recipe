import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet, useLocation } from "react-router";
import Sidebar from "./../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { useEffect } from "react";

const Layout = () => {
  const queryClient = new QueryClient();
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": "Home Page",
      "/home": "Home Page",
      "/category/beef": "Beef Recipes",
      "/category/breakfast": "Breakfast Recipes",
      "/category/chicken": "Chicken Recipes",
      "/category/dessert": "Dessert Recipes",
      "/category/goat": "Goat Recipes",
      "/category/lamb": "Lamb Recipes",
      "/category/miscellaneous": "Miscellaneous Recipes",
      "/category/pasta": "Pasta Recipes",
      "/category/pork": "Pork Recipes",
      "/category/seafood": "Seafood Recipes",
      "/category/side": "Side Dishes",
      "/category/starter": "Starter Recipes",
      "/category/vegan": "Vegan Recipes",
      "/category/vegetarian": "Vegetarian Recipes",
    };

    let title = titleMap[location.pathname] || "Page Not Found";

    if (location.pathname.startsWith("/recipeDetails/")) {
      title = "Recipe Details";
    }

    document.title = title;
  }, [location]);

  const showNavbar =
    !location.pathname.includes("/recipeDetails") &&
    !location.pathname.includes("/error");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Sidebar />
        {showNavbar && <Navbar />}

        <Outlet></Outlet>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default Layout;
