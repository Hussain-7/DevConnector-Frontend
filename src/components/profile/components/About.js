import React, { Fragment } from "react";

export const About = ({ profile }) => {
  const { user, bio, skills } = profile;
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          {" "}
          {user.name && (
            <h2 className="text-primary">{user.name.split(" ")[0]}'s Bio</h2>
          )}
          <p>{bio}</p>
          <div className="line"></div>
        </Fragment>
      )}
      {skills.length > 0 && (
        <Fragment>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="p-1">
                <i className="fa fa-check"></i> {skill}
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default About;
