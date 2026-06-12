import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";

export default function Vouchers() {

  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    package: "daily",
    count: 5
  });

  // fetch vouchers
  const loadVouchers = async () => {
    try {
      const res = await API.get("/api/vouchers"); // backend endpoint
      setVouchers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadVouchers();
  }, []);

  // generate vouchers
  const generate = async () => {
    try {
      setLoading(true);

      await API.post("/api/vouchers/generate", form);

      await loadVouchers();

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <h2>🎟 Voucher Generator</h2>

        {/* FORM */}
        <div className="card">

          <label>Package</label>
          <select
            onChange={(e) =>
              setForm({ ...form, package: e.target.value })
            }
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <label>Quantity</label>
          <input
            type="number"
            value={form.count}
            onChange={(e) =>
              setForm({ ...form, count: e.target.value })
            }
          />

          <button onClick={generate} disabled={loading}>
            {loading ? "Generating..." : "Generate Vouchers"}
          </button>

        </div>

        {/* LIST */}
        <div className="card">

          <h3>Generated Vouchers</h3>

          <table width="100%">
            <thead>
              <tr>
                <th>Code</th>
                <th>Package</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {vouchers.map((v) => (
                <tr key={v.id}>
                  <td>{v.code}</td>
                  <td>{v.package}</td>
                  <td>{v.used ? "Used" : "Active"}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
