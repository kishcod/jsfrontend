import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";

export default function Dashboard() {

  const [stats, setStats] = useState({
    revenue: 0,
    users: 0,
    totalPayments: 0
  });

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await API.get("/api/admin/dashboard");

        const data = res?.data || {};

        setStats({
          revenue: data.revenue || 0,
          users: data.users || 0,
          totalPayments: data.totalPayments || 0
        });

        // temporary chart data (replace later with real DB stats)
        setChartData([
          { date: "Mon", revenue: 500 },
          { date: "Tue", revenue: 800 },
          { date: "Wed", revenue: 1200 },
          { date: "Thu", revenue: 600 },
          { date: "Fri", revenue: 1800 }
        ]);

      } catch (err) {
        console.log(err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        {loading ? (
          <h3 style={{ padding: 20 }}>Loading dashboard...</h3>
        ) : error ? (
          <h3 style={{ color: "red", padding: 20 }}>{error}</h3>
        ) : (
          <>
            <div className="stats">

              <StatCard
                title="Revenue"
                value={`KES ${stats.revenue}`}
              />

              <StatCard
                title="Users"
                value={stats.users}
              />

              <StatCard
                title="Payments"
                value={stats.totalPayments}
              />

              <StatCard
                title="Router"
                value="Online"
              />

            </div>

            <div className="chartBox">
              <RevenueChart data={chartData} />
            </div>
          </>
        )}

      </div>

    </div>
  );
}
