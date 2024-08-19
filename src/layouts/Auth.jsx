import { Routes, Route } from "react-router-dom";
import "../css/auth.css";
import Login from "../pages/auth/login";
import Lost from "../pages/auth/lost";

function Auth() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/lost" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default Auth;
