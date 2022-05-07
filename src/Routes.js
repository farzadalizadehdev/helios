import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./containers/Dashboard/Dashboard"));
const Requests = React.lazy(() => import("./containers/Requests/Requests"));

const RoutesWithNavigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesWithNavigation;
