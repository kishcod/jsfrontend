import { useState } from "react";
import axios from "axios";
import "../styles/main.css";

const packages = [
  { name: "2 Hours", price: 15 },
  { name: "5 Hours", price: 20 },
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

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://josmawifi.onrender.com";

  const openModal = (pkg) => {
    setSelected(pkg);
    setMsg("");
  };

  const closeModal = () => {
    setSelected(null);
    setPhone("");
    setMsg("");
  };

  const payNow = async () => {
    if (!phone) {
      return setMsg("Please enter your phone number");
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

      {/* HERO SECTION */}
      <div className="hero-card">
        <h2>⚡ Josma WiFi</h2>
        <p>
          Fast • Secure • Unlimited Internet Access
        </p>
        <span>
          Pay via M-Pesa and get connected instantly.
        </span>
      </div>

      {/* PACKAGES */}
      <div className="grid">
        {packages.map((pkg, i) => (
          <div className="card" key={i}>

            <h3>{pkg.name}</h3>

            <div className="price">
              KES {pkg.price}
            </div>

            <div className="badge">
              ⚡ Instant Activation
            </div>

            <button
              className="buy-btn"
              onClick={() => openModal(pkg)}
            >
              Buy Package
            </button>

          </div>
        ))}
      </div>

      {/* PAYMENT MODAL */}
      {selected && (
        <div className="modal-bg">
          <div className="modal">

            <h2>{selected.name}</h2>

            <div
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#2563eb",
                marginBottom: "10px"
              }}
            >
              KES {selected.price}
            </div>

            <input
              className="input"
              type="tel"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <p className="note">
              Enter your M-Pesa number and press Pay Now.
            </p>

            {msg && (
              <p className="note">
                {msg}
              </p>
            )}

            <button
              className="btn btn-primary"
              onClick={payNow}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : "Pay Now"}
            </button>

            <button
              className="btn btn-danger"
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
