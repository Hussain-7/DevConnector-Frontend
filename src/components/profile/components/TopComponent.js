import React from "react";
const TopComponent = ({ profile }) => {
  const { user, status, company, location, social } = profile;
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={user.avatar} alt="" />
      <h1 className="large">{user.name}</h1>
      <p className="lead">
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location}</p>
      <div className="icons my-1">
        <a href="#!" rel="noopener noreferrer">
          <i className="fas fa-globe fa-2x"></i>
        </a>
        <a
          href={social.twitter ? social.twitter : "#!"}
          target={social.twitter ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href={social.facebook ? social.facebook : "#!"}
          target={social.facebook ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href={social.linkedin ? social.linkedin : "#!"}
          target={social.linkedin ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href={social.youtube ? social.youtube : "#!"}
          target={social.youtube ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a
          href={social.instagram ? social.instagram : "#!"}
          target={social.instagram ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
export default TopComponent;
