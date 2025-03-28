import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import LoginLayout from "../Layouts/LoginLayout";

function LoginRoute() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
      </Routes>
  );
}

export default LoginRoute;
