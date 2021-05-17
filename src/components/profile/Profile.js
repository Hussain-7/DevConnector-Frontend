import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../layout/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getGithubRepos,
  getProfileById,
} from "../../redux/profile/actionCreater";
import TopComponent from "./components/TopComponent";
import About from "./components/About";
import Experience from "./components/Experience";
import { Education } from "./components/Education";
import { Repo } from "./components/Repo";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { profile, loading, repos } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    console.log("Running");
    if (profile) dispatch(getGithubRepos(profile.githubusername));
  }, [profile, dispatch]);

  return profile == null || auth.loading || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/profiles" className="btn btn-light">
        Back To Profiles
      </Link>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to="/edit-profile" className="btn btn-dark ">
            Edit Profile
          </Link>
        )}

      <div className="profile-grid my-1">
        {/* <!-- Top --> */}
        <TopComponent profile={profile} />
        {/* <!-- About --> */}
        <About profile={profile} />
        {/* <!-- Experience --> */}
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {profile.experience.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
          {profile.experience.length > 0 ? (
            <Fragment>
              {profile.experience.map((experience, index) => (
                <Experience key={index} experience={experience} />
              ))}
            </Fragment>
          ) : (
            <h4>No Experience Credentials</h4>
          )}
        </div>

        {/* <!-- Education --> */}
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {profile.education.length > 0 ? (
            <Fragment>
              {profile.education.map((ed, index) => (
                <Education key={index} edu={ed} />
              ))}
            </Fragment>
          ) : (
            <h4>No Education Credentials</h4>
          )}
        </div>

        {/* <!-- Github --> */}
        {profile.githubusername && (
          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github"></i> Github Repos
            </h2>
            {repos.length > 0 ? (
              <Fragment>
                {" "}
                {repos.map((repo, index) => (
                  <Repo key={index} repo={repo} />
                ))}
              </Fragment>
            ) : (
              <div className="profile bg-white p-2">
                <h4>No Github Repos</h4>
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Profile;
