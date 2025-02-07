import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "./../../RecipeCard/RecipeCard";

const Vegetarian = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function showMeals() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
        );
        setMeals(data.meals || []);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
    }
    showMeals();
  }, []);

  return (
    <div className="sm:ml-64 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20 px-10 py-20">
      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Vegetarian;
