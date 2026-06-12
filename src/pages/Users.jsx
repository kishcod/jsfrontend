import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";

export default function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/api/users"); // backend endpoint
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <h2>👥 Users</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="card">

            <table width="100%">
              <thead>
                <tr>
                  <th>Phone</th>
                  <th>Package</th>
                  <th>Status</th>
                  <th>Expiry</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.phone}</td>
                    <td>{u.package}</td>
                    <td>
                      <span
                        style={{
                          color:
                            u.status === "active"
                              ? "#22c55e"
                              : "#ef4444",
                          fontWeight: "bold"
                        }}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td>
                      {u.expiry
                        ? new Date(u.expiry).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}
