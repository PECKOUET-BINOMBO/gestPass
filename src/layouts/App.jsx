import { Routes, Route } from "react-router-dom";
import "../css/App.css";
import Dashboard from "../pages/dashboard";
import UserAdmin from "../pages/userAdmin";
import UserEnrolle from "../pages/userEnrolle";
import Profil from "../pages/profil";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/user" element={<UserAdmin />} />
        <Route path="/admin/enrolement" element={<UserEnrolle />} />
        <Route path="/admin/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
