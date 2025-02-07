import logo from "./../../assets/images/logo.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm w-full z-[55] relative">
      <div className={`${style.container} w-[90%] max-w-screen-xl mx-auto `}>
        <div className={`${style.flexContainer} `}>
          <div className={`${style.logo}`}>
            <img src={logo} alt="" />
            Recipe
          </div>
          <div className={`${style.route}`}>Route</div>
        </div>
        <div className={`${style.copyright}`}>
          © 2025 Nagy Osama™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
