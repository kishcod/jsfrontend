import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Josma Admin</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/payments">Payments</Link>

      <Link to="/users">Users</Link>

      <Link to="/packages">Packages</Link>

      <Link to="/router">Router</Link>

      <Link to="/vouchers">Vouchers</Link>

      <Link to="/settings">Settings</Link>

    </div>
  );
}
