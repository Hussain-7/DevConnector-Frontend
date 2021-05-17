import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  deleteAccount,
  getCurrentProfile,
} from "../../redux/profile/actionCreater";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../layout/Spinner";
import DashboardLink from "./DashboardLink";
import Education from "./Education";
import Experience from "./Experience";

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return profile == null || auth.loading || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {" "}
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {auth.user && auth.user.name}
      </p>
      {profile != null ? (
        <Fragment>
          <DashboardLink />
          {profile.experience.length !== 0 && (
            <Experience experience={profile.experience} />
          )}
          {profile.education.length !== 0 && (
            <Education education={profile.education} />
          )}
          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteAccount());
              }}
            >
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Dashboard;
