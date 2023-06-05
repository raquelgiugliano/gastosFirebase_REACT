import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { UserAuth } from "../context/AuthContext";
import { ProtectorRuta } from "../components/ProtectorRuta";

export function MyRoutes() {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/perfil"
        element={
          <ProtectorRuta>
            <Perfil />
          </ProtectorRuta>
        }
      />
    </Routes>
  );
}
