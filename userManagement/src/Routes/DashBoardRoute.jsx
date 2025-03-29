import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../Pages/DashBoard";
import { UserProvider } from "../Hooks/userContex";

function DashBoardRoute() {
  //   return <Route path="d" element={} />;
  //   return <h1>fukc you man</h1>
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <UserProvider>
            <DashBoardPage />
          </UserProvider>
        }
      ></Route>
    </Routes>
  );
}

export default DashBoardRoute;
