import React from "react";

function Result({ profile }) {
  const {
    login,
    name,
    location,
    public_repos,
    followers,
    following,
    avatar_url,
  } = profile;

  const url = `https://github.com/${login}`;

  return (
    <div className="container mt-4 myStyle">
      <div className="row">
        <div className="col-4">
          <div className="avatar mt-2" style={{ float: "right" }}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={avatar_url}
                alt={name || login}
                className="img-fluid rounded-circle"
                style={{ width: "200px", height: "200px" }}
              />
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="name mt-2">📛Name: {name || login}</div>
          <div className="repos mt-2">🍰Public Repos: {public_repos}</div>
          <div className="follow mt-2">
            <p>😇Followers: {followers}</p>
            <p>❤️‍🔥Following: {following}</p>
          </div>
          <div className="location">📍Location: {location || "N/A"}</div>
        </div>
      </div>
    </div>
  );
}

export default Result;
