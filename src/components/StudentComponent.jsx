export default function StudentComponent({ name, course, year, onSelect }) {
  return (
    <div className="card">
      <h3 className="cardTitle">{name}</h3>
      <p className="muted">
        {course} • Year {year}
      </p>

      {/* event handler via prop */}
      <button className="btn" onClick={onSelect}>
        Select Student
      </button>
    </div>
  );
}
