import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Josma Admin</h2>

      <Link to="/admin/dashboard">Dashboard</Link>

      <Link to="/admin/payments">Payments</Link>

      <Link to="/admin/users">Users</Link>

      <Link to="/admin/packages">Packages</Link>

      <Link to="/admin/router">Router</Link>

      <Link to="/admin/vouchers">Vouchers</Link>

      <Link to="/admin/settings">Settings</Link>

    </div>
  );
}
