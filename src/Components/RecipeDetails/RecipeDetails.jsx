import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "react-query";
import { useEffect } from "react";
import style from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getRecipeDetails = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals?.[0];
  };

  const { data: meal, isLoading } = useQuery(
    ["recipeDetails", id],
    getRecipeDetails,
    {
      enabled: !isNaN(id),
    }
  );

  useEffect(() => {
    if (isNaN(id) || (!isLoading && !meal)) {
      navigate("/");
    }
  }, [id, isLoading, meal, navigate]);

  return (
    <div className={`${style.recipeDetails} sm:ml-64 py-6 min-h-screen`}>
      {isLoading ? (
        <div className="text-center py-6">Loading recipe details...</div>
      ) : meal ? (
        <div
          className={`${style.container} flex sm:flex-col flex-wrap lg:flex-row lg:flex-nowrap gap-3`}
        >
          <div
            className={`${style.leftContainer} lg:w-2/3 w-full flex sm:flex-col flex-wrap`}
          >
            <h1 className={`w-full ${style.mealTitle}`}>{meal.strMeal}</h1>
            <div
              className={`${style.divBlock} flex sm:flex-col flex-wrap gap-3 lg:flex-row lg:flex-nowrap`}
            >
              <div className={`${style.left} lg:w-1/2 w-full`}>
                <div className={`${style.foodImage}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <div className={`${style.buttons}`}>
                  <a href={meal.strYoutube} className={`${style.youtube}`}>
                    <button>
                      <i className="fa-brands fa-youtube"></i>youtube
                    </button>
                  </a>
                  <a href={meal.strSource} className={`${style.source}`}>
                    <button>
                      <i className="fa-solid fa-globe"></i>source
                    </button>
                  </a>
                </div>
              </div>
              <div className={`${style.middle} lg:w-1/2 w-full`}>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>
          <div className={`${style.right} lg:w-1/3 w-full`}>
            <div className={`${style.card}`}>
              <div className={`${style.title}`}>Ingredients</div>
              <div className={`${style.cardBody}`}>
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];
                  return (
                    ingredient && (
                      <div key={i} className={`${style.ingredient}`}>
                        <span>{ingredient}:</span>
                        <span>{measure || "N/A"}</span>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">Redirecting...</div>
      )}
    </div>
  );
};

export default RecipeDetails;
