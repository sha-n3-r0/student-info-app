import { useEffect, useMemo, useState } from "react";
import StudentComponent from "../components/StudentComponent.jsx";
import { fetchUsers } from "../api/usersApi.js";

export default function StudentsPage() {
  // local state for student cards
  const [selectedStudent, setSelectedStudent] = useState(null);

  // API state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const students = useMemo(
    () => [
      { id: 1, name: "Shanner Orcasitas", course: "BSIT", year: 4 },
      { id: 2, name: "Aira Santos", course: "BSCS", year: 2 },
      { id: 3, name: "Mark Dela Cruz", course: "BSIS", year: 3 },
    ],
    []
  );

  async function loadUsers() {
    setLoading(true);
    setErrorMsg("");
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setErrorMsg(err?.message || "Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section>
      <h2>Students</h2>
      <p className="section-subtitle">Select a student card below and manage your selection.</p>

      {/* STATE DISPLAY */}
      <div className="panel">
        <strong>Selected Student:</strong>{" "}
        {selectedStudent ? (
          <span>
            {selectedStudent.name} ({selectedStudent.course}, Year {selectedStudent.year})
          </span>
        ) : (
          <span className="muted">None</span>
        )}
        <button
          className="btn secondary"
          onClick={() => setSelectedStudent(null)}
          disabled={!selectedStudent}
        >
          Clear Selection
        </button>
      </div>

      {/* COMPONENT + PROPS */}
      <div className="grid">
        {students.map((s) => (
          <StudentComponent
            key={s.id}
            name={s.name}
            course={s.course}
            year={s.year}
            onSelect={() => setSelectedStudent(s)}
          />
        ))}
      </div>

      <hr className="divider" />

      {/* API INTEGRATION */}
      <div className="apiBox">
        <div className="apiHeader">
          <h3>Public API Data (JSONPlaceholder Users)</h3>
          <button className="btn" onClick={loadUsers} disabled={loading}>
            Refresh API Data
          </button>
        </div>

        {loading && <p className="muted">Loading users…</p>}

        {errorMsg && (
          <p className="error">
            Error: {errorMsg}
          </p>
        )}

        {!loading && !errorMsg && (
          <ul className="list">
            {users.map((u) => (
              <li key={u.id} className="listItem">
                <strong>{u.name}</strong> — <span className="muted">{u.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
