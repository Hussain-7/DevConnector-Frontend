import React from "react";

export const Repo = ({ repo }) => {
  const {
    full_name,
    description,
    watchers_count,
    stargazers_count,
    forks_count,
    html_url,
  } = repo;
  return (
    <div className="repo bg-white p-1 my-1">
      <div>
        <h4>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {full_name}
          </a>
        </h4>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li className="badge badge-primary">Stars: {stargazers_count}</li>
          <li className="badge badge-dark">Watchers: {watchers_count}</li>
          <li className="badge badge-light">Forks: {forks_count}</li>
        </ul>
      </div>
    </div>
  );
};
