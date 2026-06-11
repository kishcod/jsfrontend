import Sidebar from "../components/Sidebar";

export default function Router() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">
        <h2>MikroTik Status</h2>
      </div>

    </div>
  );
}
