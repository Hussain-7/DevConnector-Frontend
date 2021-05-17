import React, { Fragment } from "react";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { removeEducation } from "../../redux/profile/actionCreater";
const Education = ({ education }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {education.map((education) => {
            return (
              <tr key={education._id}>
                <td>{education.school}</td>
                <td className="hide-sm">{education.degree}</td>
                <td className="hide-sm">
                  {Moment(education.from).format("DD-MM-YYYY")} -{" "}
                  {education.current
                    ? "Now"
                    : Moment(education.to).format("DD-MM-YYYY")}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(removeEducation(education._id));
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
export default Education;
