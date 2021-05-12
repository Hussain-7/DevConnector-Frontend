import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);
  console.log(alerts);
  //   useEffect(() => {
  //     dispatch(setAlert(message, alertType));
  //   }, [message, alertType]);

  return [alerts];
};
