import { Form, Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.css";
import { useWeatherContext } from "../context/WeatherContext";
function Header() {
  const { handleSubmit, query, handleInputChange } = useWeatherContext();
  const navigate = useNavigate();

  return (
    <header className="bg-blue-400 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className={`${styles.pageLink}  text-white  font-bold text-xl`}
        >
          YAYA WEATHER
        </Link>
        <Form
          className="flex items-center"
          onSubmit={function (e) {
            navigate(`/weather`);
            handleSubmit(e);
          }}
        >
          <input
            className="rounded-l-full bg-violet-100 text-xl border-2 border-purple-500 py-2 px-4 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Type city name"
            value={query}
            onChange={handleInputChange}
          />
        </Form>
      </div>
    </header>
  );
}

export default Header;
