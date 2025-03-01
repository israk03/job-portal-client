/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
}
