import { Routes, Route } from "react-router";
import Home from "./Home";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Navigation from "./Navigation";
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
