// eslint-disable-next-line no-unused-vars
import React, {
  createContext,
  useState,
  useContext as useReactContext,
  //useEffect,
} from "react";
import { API_KEY } from "../config/key";

const WeatherContext = createContext();

// eslint-disable-next-line react/prop-types
function WeatherContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState([]);

  async function weatherCall() {
    const controller = new AbortController();
    if (!query) return setApiData([]);
    if (query.length < 2) return;

    try {
      const req = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5&aqi=no&alerts=no`,
        { signal: controller.signal }
      );

      const data = await req.json();
      clearState();
      setApiData((arr) => [...arr, data]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      controller.abort(); // Abort the fetch when the component unmounts or when query changes
    }
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await weatherCall();
  };
  const clearState = () => {
    setQuery(``), setApiData([]);
  };
  // useEffect(() => {
  //   console.log(apiData);
  // }, [apiData]);

  return (
    <WeatherContext.Provider
      value={{
        query,
        setQuery,
        handleInputChange,
        handleSubmit,
        apiData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeatherContext() {
  return useReactContext(WeatherContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { WeatherContextProvider, useWeatherContext };
