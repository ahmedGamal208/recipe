import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    navigate(`/category/${selectedValue}`);
  };

  return (
    <>
      <nav className={`${style.navbar} sm:ml-64`}>
        <div
          className={`${style.container} sm:flex sm:flex-col sm:justify-center sm:items-center md:block sm:px[20px] md:px-0`}
        >
          <div>
            <h1 className={`${style.header1}`}>Learn, Cook, Eat Your Food</h1>
          </div>
          <div className="hidden md:block">
            <ul className={`${style.list}`}>
              {[
                { name: "All", path: "/" },
                { name: "Beef", path: "/category/beef" },
                { name: "Breakfast", path: "/category/breakfast" },
                { name: "Chicken", path: "/category/chicken" },
                { name: "Dessert", path: "/category/dessert" },
                { name: "Goat", path: "/category/goat" },
                { name: "Lamb", path: "/category/lamb" },
                { name: "Miscellaneous", path: "/category/miscellaneous" },
                { name: "Pasta", path: "/category/pasta" },
                { name: "Pork", path: "/category/pork" },
                { name: "Seafood", path: "/category/seafood" },
                { name: "Side", path: "/category/side" },
                { name: "Starter", path: "/category/starter" },
                { name: "Vegan", path: "/category/vegan" },
                { name: "Vegetarian", path: "/category/vegetarian" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? `${style.activeTab} ` : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <select
            id="tabs"
            className={`${style.tabs}  block w-full md:hidden`}
            onChange={handleSelectChange}
          >
            <option value="Beef">Beef</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Goat">Goat</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
