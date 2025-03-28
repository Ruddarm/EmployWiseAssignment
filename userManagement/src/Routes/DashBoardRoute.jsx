import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../Pages/DashBoard";

function DashBoardRoute() {
  //   return <Route path="d" element={} />;
  //   return <h1>fukc you man</h1>
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoardPage />}></Route>
    </Routes>
  );
}

export default DashBoardRoute;
