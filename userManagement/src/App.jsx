import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./Routes/privateroute";
import DashBoardRoute from "./Routes/DashBoardRoute";
import LogingRoute from "./Routes/LogingRoute"
import NotFoundPage from "./Pages/NotFoundPage";
function App() {
  const isAuthenticated = localStorage.getItem("authToken"); // ✅ Check authentication

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/user/dashboard" : "/auth/login"} replace />} />
        <Route path="/auth/login" element={<LogingRoute></LogingRoute> } />
        <Route element={<PrivateRoute />}>
          <Route path="/user/*" element={<DashBoardRoute></DashBoardRoute>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
