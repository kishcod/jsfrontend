import { useState } from "react";
import axios from "axios";
import "../styles/main.css";

const packages = [
  { name: "5 Hours", price: 20 },
  { name: "2 Hours", price: 15 },
  { name: "12 Hours", price: 30 },
  { name: "24 Hours", price: 40 },
  { name: "3 Days", price: 100 },
  { name: "1 Week", price: 180 },
  { name: "1 Month", price: 500 },
  { name: "1 Day (3 Devices)", price: 100 },
  { name: "1 Month (5 Devices)", price: 800 }
];

export default function Packages() {
  const [selected, setSelected] = useState(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const openModal = (pkg) => {
    setSelected(pkg);
    setMsg("");
  };

  const closeModal = () => {
    setSelected(null);
    setPhone("");
  };

 const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://josmawifi.onrender.com";

const payNow = async () => {
  if (!phone) {
    return setMsg("Enter phone number");
  }

  setLoading(true);
  setMsg("");

  try {
    const formattedPhone = phone.startsWith("0")
      ? `254${phone.substring(1)}`
      : phone;

    const response = await axios.post(
      `${API_URL}/api/payments/initiate`,
      {
        phone: formattedPhone,
        amount: selected.price,
        packageName: selected.name
      }
    );

    if (response.data.success) {
      setMsg("📲 STK Push sent. Check your phone.");
    } else {
      setMsg("❌ Failed to send STK Push");
    }
  } catch (error) {
    console.error(error);

    setMsg(
      error.response?.data?.message ||
      "❌ Payment request failed"
    );
  }

  setLoading(false);
};

  return (
    <div className="page">

      <h1 className="title">⚡ Josma WiFi</h1>
      <p className="subtitle">
        Instant activation after payment • Fast secure internet access
      </p>

      <div className="grid">

        {packages.map((pkg, i) => (
          <div className="card" key={i} onClick={() => openModal(pkg)}>
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price} BOB</div>
            <div className="badge">⚡ Instant Activation</div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal-bg">
          <div className="modal">

            <h3>{selected.name}</h3>
            <p className="subtitle">{selected.price} BOB</p>

            <input
              className="input"
              placeholder="Enter M-Pesa phone (07xx...)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <p className="note">
              ⚡ You will receive STK push instantly after clicking Pay
            </p>

            {msg && <p className="note">{msg}</p>}

            <button
              className="btn btn-primary"
              onClick={payNow}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

            <button
              className="btn"
              style={{ marginTop: "10px", background: "#ff4d4d", color: "white" }}
              onClick={closeModal}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}