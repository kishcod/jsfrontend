import { useState } from "react";

import PhoneForm from "./PhoneForm";

import "./PaymentModal.css";

function PaymentModal({ pkg }) {
  const [phone, setPhone] = useState("");

  const handlePay = () => {
    alert(
      `PayHero Payment\nPackage: ${pkg.name}\nPhone: ${phone}`
    );
  };

  return (
    <div className="payment-box">
      <PhoneForm
        phone={phone}
        setPhone={setPhone}
      />

      <button onClick={handlePay}>
        Buy Package
      </button>
    </div>
  );
}

export default PaymentModal;