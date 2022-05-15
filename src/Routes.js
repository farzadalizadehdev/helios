import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from './containers/Auth/Auth'
const Indivisual = React.lazy(() => import("./containers/Indivisual/Indivisual"));
const Organizational = React.lazy(() => import("./containers/Organizational/Organizational"));
const Dashboard = React.lazy(() => import("./containers/Dashboard/Dashboard"));
const Requests = React.lazy(() => import("./containers/Requests/Requests"));


const RoutesWithNavigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/indivisual" element={<Indivisual />} />
        <Route path="/Organizational" element={<Organizational />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesWithNavigation;
