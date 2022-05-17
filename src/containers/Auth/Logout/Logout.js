import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Logout = (props) => {
  useEffect(() => {
    //logout action
  }, []);
  return <Navigate to="/" />;
};

export default Logout;
