import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./../RecipeCard/RecipeCard";

const Home = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function showMeals() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setMeals(data.meals || []);
        // console.log(data);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
    }
    showMeals();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="sm:ml-64 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 px-10 py-20">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default Home;
