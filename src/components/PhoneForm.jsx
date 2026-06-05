import "./PhoneForm.css";

function PhoneForm({ phone, setPhone }) {
  return (
    <input
      className="phone-input"
      placeholder="Enter Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}

export default PhoneForm;