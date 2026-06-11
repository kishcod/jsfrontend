import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";

export default function Dashboard() {

  const chartData = [
    { date:"Mon", revenue:500 },
    { date:"Tue", revenue:800 },
    { date:"Wed", revenue:1200 },
    { date:"Thu", revenue:600 },
    { date:"Fri", revenue:1800 }
  ];

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <div className="stats">

          <StatCard
            title="Revenue"
            value="KES 12,500"
          />

          <StatCard
            title="Users"
            value="31"
          />

          <StatCard
            title="Payments"
            value="48"
          />

          <StatCard
            title="Router"
            value="Online"
          />

        </div>

        <RevenueChart
          data={chartData}
        />

      </div>

    </div>
  );
}
