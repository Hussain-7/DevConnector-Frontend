import React, { Fragment } from "react";
import { useAlert } from "../../hooks";

const Alert = () => {
  const [alerts] = useAlert();
  if (alerts !== null && alerts.length > 0) {
    return alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  } else {
    return <Fragment></Fragment>;
  }
};

export default Alert;
