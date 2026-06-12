import { BrowserRouter, Routes, Route } from "react-router-dom";

/* =========================
   PUBLIC (CUSTOMER) PAGES
========================= */
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Success from "./pages/Success";
import Expired from "./pages/Expired";

/* =========================
   ADMIN PAGES
========================= */
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Users from "./pages/Users";
import AdminPackages from "./pages/AdminPackages";
import RouterPage from "./pages/Router";
import Vouchers from "./pages/Vouchers";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/success" element={<Success />} />
        <Route path="/expired" element={<Expired />} />

        {/* ================= ADMIN AUTH ================= */}
        <Route path="/admin" element={<Login />} />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/packages" element={<AdminPackages />} />
        <Route path="/admin/router" element={<RouterPage />} />
        <Route path="/admin/vouchers" element={<Vouchers />} />
        <Route path="/admin/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
