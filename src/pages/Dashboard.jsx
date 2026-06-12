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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/admin/dashboard");

        setStats({
          revenue: res.data.revenue,
          users: res.data.users,
          totalPayments: res.data.totalPayments
        });

        // mock chart (replace later with real DB data)
        setChartData([
          { date: "Mon", revenue: 500 },
          { date: "Tue", revenue: 800 },
          { date: "Wed", revenue: 1200 },
          { date: "Thu", revenue: 600 },
          { date: "Fri", revenue: 1800 }
        ]);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

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

      </div>

    </div>
  );
}
