import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
