import React, { Fragment } from "react";
import Moment from "moment";

export const Education = ({ edu }) => {
  const { school, degree, fieldofstudy, to, from, current, description } = edu;
  return (
    <Fragment>
      <div>
        {school && <h3>{school}</h3>}
        <p>
          {" "}
          {Moment(from).format("DD-MM-YYYY")} -{" "}
          {current ? "Now" : Moment(to).format("DD-MM-YYYY")}
        </p>
        {degree && (
          <p>
            <strong>Degree: </strong>
            {degree}
          </p>
        )}

        {fieldofstudy && (
          <p>
            <strong>Field Of Study: </strong>
            {fieldofstudy}
          </p>
        )}

        {description && (
          <p>
            <strong>Description: </strong>
            {description}
          </p>
        )}
      </div>
    </Fragment>
  );
};
