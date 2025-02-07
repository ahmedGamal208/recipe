import style from "./Error.module.css";

const Error = () => {
  return (
    <div
      className={`${style.error} sm:ml-64 min-h-screen text-center m-auto my-20`}
    >
      Page Not Found
    </div>
  );
};

export default Error;
