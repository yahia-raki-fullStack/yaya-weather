import { useWeatherContext } from "../../context/WeatherContext";
import CityCard from "../../components/CityCard";

function City() {
  const { apiData } = useWeatherContext();

  if (!apiData || apiData.length === 0) {
    return null; // Render nothing if apiData is empty or undefined
  }
  //console.log(apiData);
  return (
    <>
      <h1 className="text-4xl font-bold text-white rounded-lg p-4 text-center">
        {apiData[0].location.name}
      </h1>
      <ul className="flex  justify-evenly align-middle  py-2 my-20  ">
        {apiData[0].forecast.forecastday.map((arr) => (
          // eslint-disable-next-line no-undef
          <CityCard key={arr.date_epoch} forecast={arr} />
        ))}
      </ul>
    </>
  );
}

export default City;
