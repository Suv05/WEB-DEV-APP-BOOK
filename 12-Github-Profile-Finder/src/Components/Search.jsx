import { TfiGithub } from "react-icons/tfi";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import Result from "./Result";

function Search({}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState(null);

  const handelProfile = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Enter a valid Github Username");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      let response = await fetch(`https://api.github.com/users/${name}`);
      if (!response.ok) {
        throw new Error("Profile Can't found");
      }
      let data = await response.json();
      setProfile(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <nav
        className="navbar mt-3 m-auto"
        style={{ backgroundColor: "#FFF455", width: "60%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/suv05">
            <TfiGithub size={30} />
          </a>
          <form className="d-flex" role="search" onSubmit={handelProfile}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="GitHub Username"
              aria-label="Search"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <button className="btn btn-outline-info" type="submit">
              <GoSearch size={20} />
            </button>
          </form>
        </div>
      </nav>
      {loading && (
        <center>
          <div className="spinner-grow text-warning mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </center>
      )}

      {error && (
        <div className="text-center mt-3 text-danger">Error: {error}</div>
      )}
      {profile && !loading && !error && <Result profile={profile} />}
    </>
  );
}

export default Search;
