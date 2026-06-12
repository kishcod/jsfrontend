import { useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";

export default function Settings() {

  const [form, setForm] = useState({
    routerIp: "",
    routerUser: "",
    routerPass: "",
    payheroKey: "",
    jwtSecret: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveSettings = async () => {
    try {
      setMessage("");

      await API.post("/api/settings", form);

      setMessage("Settings saved successfully ✔");
    } catch (err) {
      setMessage("Failed to save settings");
    }
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <h2>⚙ Settings</h2>

        <div className="card">

          <h3>Router Configuration</h3>

          <input
            name="routerIp"
            placeholder="Router IP"
            onChange={handleChange}
          />

          <input
            name="routerUser"
            placeholder="Router Username"
            onChange={handleChange}
          />

          <input
            name="routerPass"
            type="password"
            placeholder="Router Password"
            onChange={handleChange}
          />

        </div>

        <div className="card">

          <h3>API Keys</h3>

          <input
            name="payheroKey"
            placeholder="PayHero Auth Key"
            onChange={handleChange}
          />

          <input
            name="jwtSecret"
            placeholder="JWT Secret"
            onChange={handleChange}
          />

        </div>

        <button onClick={saveSettings}>
          Save Settings
        </button>

        {message && (
          <p style={{ marginTop: 10 }}>{message}</p>
        )}

      </div>

    </div>
  );
}
