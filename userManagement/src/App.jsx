import "./App.css";
import LoginLayout from "./Layouts/LoginLayout";
import MainLayout from "./Layouts/MainLayout";
import DashBoardPage from "./Pages/DashBoard";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginRoute from "./Routes/LogingRoute";
import DashBoardRoute from "./Routes/DashBoardRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth/login" element={<LoginRoute/>}></Route>
          <Route path="/user/*" element={<DashBoardRoute/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
// user/edit , user/list/demo 

export default App;
