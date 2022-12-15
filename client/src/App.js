import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import socketInit from "./socket/init";

socketInit();

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/room/:id"
        element={
          <ProtectedRoute>
            <Room />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
};

export default App;
