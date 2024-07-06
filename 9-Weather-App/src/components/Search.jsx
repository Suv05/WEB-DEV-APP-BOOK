import { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Weather from "./Weather";
function Search({}) {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const handelOnClick = (event) => {
    event.preventDefault();
    setCity(value);
    setValue("");
  };
  return (
    <>
      <div className="contain">
        <nav
          className="navbar bg-body-secondary m-auto mt-3"
          style={{
            width: "60vw",
            border: "2px solid #DEF9C4",
            borderRadius: "1rem",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand">
              <TiWeatherPartlySunny size={35} />
            </a>
            <form className="d-flex" role="search" onSubmit={handelOnClick}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter Ur City"
                aria-label="Search"
                style={{ width: "20vw" }}
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <Weather city={city} />
      </div>
    </>
  );
}

export default Search;
