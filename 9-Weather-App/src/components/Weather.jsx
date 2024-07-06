import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbWind } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { FiCloudDrizzle } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { GiStripedSun } from "react-icons/gi";
import formatTime from "./formatTime";

function Weather({ city }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState("");

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=918a1088506f543dc3766145f4261eac`;

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(api)
        .then((res) => res.json()) // Corrected here
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false); // Ensure loading is set to false on error
        });
    }
  }, [city]);

  if (loading)
    return (
      <center className="mt-5">
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    );

  if (error) return <div>Error: {error}</div>;

  if (!weather) return null;

  // Extract icon code from the weather data
  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <div className="card mt-4">
        <span
          className="badge rounded-pill text-bg-warning"
          style={{ maxWidth: "10vw" }}
        >
          <CiLocationOn size={18} className="me-1"/>
          {weather.name}, {weather.sys.country}
        </span>
        <div className="text-center">
          <img
            className="mt-3"
            src={iconUrl}
            alt={weather.weather[0].description}
            style={{ width: "8vw" }}
          />
          <h1>
            <strong>{Math.floor(weather.main.temp - 273.15)}°C</strong>
          </h1>
          <h5>{weather.weather[0].description}</h5>
        </div>

        <div className="d-flex flex-row m-auto mt-5">
          <div className="mx-5">
            <TbWind size={45} />
            <span style={{ fontSize: "1.5rem" }}>{weather.wind.speed}</span>
            <strong>
              <p> Wind Speed</p>
            </strong>
          </div>
          <div className="mx-5">
            <IoWaterOutline size={45} className="m-auto" />
            <span style={{ fontSize: "1.3rem" }}>{weather.main.humidity}%</span>
            <strong>
              <p>Humidity</p>
            </strong>
          </div>
          <div className="mx-5">
            <FiCloudDrizzle size={45} className="m-auto" />
            <span style={{ fontSize: "1.3rem" }}>{weather.main.pressure}p</span>
            <strong>
              <p>Pressure</p>
            </strong>
          </div>
        </div>

        <div className="d-flex flex-row m-auto mt-5">
          <span className="badge rounded-pill text-bg-primary mx-2">
            <GiStripedSun size={20} className="me-2" />
            {formatTime(weather.sys.sunrise)}
          </span>
          <span className="badge rounded-pill text-bg-primary mx-2">
            <BsClockHistory size={20} className="me-2" />
            {formatTime(weather.timezone)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Weather;
