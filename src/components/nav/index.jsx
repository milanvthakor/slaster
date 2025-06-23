import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-themed">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Slaster
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms-of-use">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
