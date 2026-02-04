import { Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";

export default function App() {
  return (
    <div className="app">
      <HeaderComponent title="Student Info App" />

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          {/* fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
