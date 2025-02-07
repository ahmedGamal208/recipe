import { Link } from "react-router-dom";
import style from "./RecipeCard.module.css";

const RecipeCard = ({ meal }) => {
  return (
    <div className={`${style.card}`}>
      <div className={`${style.container}`}>
        <div className={`${style.foodImg} w-[220px] md:w-[150px] lg:w-[250px]`}>
          <img className="" src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className={`${style.info} `}>
          <div className={`${style.upper}`}>
            <h3 className={`${style.recipeName}`}>
              {meal.strMeal.split(" ").slice(0, 3).join(" ")}
            </h3>
            {meal.strArea ? (
              <div className={`${style.origin}`}>
                <i className="fa-solid fa-earth-americas"></i> {meal.strArea}
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to={`/recipeDetails/${meal.idMeal}`}>
            <button className={`${style.view} `}>View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
