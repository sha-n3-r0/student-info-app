import { NavLink } from "react-router-dom";

export default function HeaderComponent({ title }) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
          Home
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => (isActive ? "link active" : "link")}>
          Students
        </NavLink>
      </nav>
    </header>
  );
}
