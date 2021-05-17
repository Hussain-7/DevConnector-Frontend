import React from "react";
import Moment from "moment";

const Experience = ({ experience }) => {
  const { company, current, to, from, description, title } = experience;
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        {Moment(from).format("DD-MM-YYYY")} -{" "}
        {current ? "Now" : Moment(to).format("DD-MM-YYYY")}
      </p>
      {title && (
        <p>
          <strong>Position: </strong>
          {title}
        </p>
      )}
      {description && (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};
export default Experience;
