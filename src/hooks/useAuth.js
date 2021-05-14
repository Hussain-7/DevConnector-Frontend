import { useSelector } from "react-redux";

const useAuth = () => {
  // const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts);
  return [alerts];
};
export default useAuth;
