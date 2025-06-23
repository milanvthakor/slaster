import { Routes, Route } from "react-router";
import Home from "./components/home/index.jsx";
import Privacy from "./components/privacy/index.jsx";
import TermsOfUse from "./components/terms-of-use/index.jsx";
import Navigation from "./components/nav/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </div>
    </div>
  );
}
