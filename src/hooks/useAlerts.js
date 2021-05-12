import { useSelector } from "react-redux";

const useAlert = () => {
  // const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);
  return [alerts];
};
export default useAlert;
