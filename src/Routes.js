import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import LazyLoading from "./shared/components/LazyLoading/LazyLoading";
// const Auth = React.lazy(() => import("./containers/Auth/Auth"));
// const Dashboard = React.lazy(() => import("./containers/Dashboard/Dashboard"));
// const Requests = React.lazy(() => import("./containers/Requests/Requests"));
import Dashboard from "./containers/Dashboard/Dashboard";
import Requests from "./containers/Requests/Requests";

const RoutesWithNavigation = () => {
  return (
    // <Suspense fallback={<LazyLoading />}>
    <Routes>
      {/* <Route path="/" element={<Auth />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/requests" element={<Requests />} />
    </Routes>
    // </Suspense>
  );
};

export default RoutesWithNavigation;
