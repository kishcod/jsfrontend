import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function RevenueChart({ data = [] }) {
  return (
    <div className="chart-container">

      <h3 className="chart-title">Revenue Overview</h3>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={Array.isArray(data) ? data : []}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1f2937"
          />

          <XAxis
            dataKey="date"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #334155",
              borderRadius: "10px",
              color: "#fff"
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}
