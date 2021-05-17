import React, { Fragment } from "react";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { removeExperience } from "../../../redux/profile/actionCreater";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experience.map((experience) => {
            return (
              <tr key={experience._id}>
                <td>{experience.company}</td>
                <td className="hide-sm">{experience.title}</td>
                <td className="hide-sm">
                  {Moment(experience.from).format("DD-MM-YYYY")} -{" "}
                  {experience.current
                    ? "Now"
                    : Moment(experience.to).format("DD-MM-YYYY")}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(removeExperience(experience._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
export { Experience };
