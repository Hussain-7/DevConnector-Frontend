import React from "react";
import { useAlert } from "../../hooks";

const Alert = () => {
  const [alerts] = useAlert();
  if (alerts !== null && alerts.length > 0) {
    console.log("Inside Alert If");
    return alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  } else {
    return <div></div>;
  }
};

export default Alert;
