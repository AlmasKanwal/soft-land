import { HashLink } from "react-router-hash-link";
import "./header.css"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-xxl">
        <h2 className="navbar-brand">SoftLand</h2>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#home">Home</HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#about">About</HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#features">Features</HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#pricing">Pricing</HashLink>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Dropdown
              </span>

              <ul className="dropdown-menu">
                <li><HashLink smooth className="dropdown-item" to="#">Dropdown 1</HashLink></li>
                <li><HashLink smooth className="dropdown-item" to="#">Dropdown 2</HashLink></li>
                <li><HashLink smooth className="dropdown-item" to="#">Dropdown 3</HashLink></li>
                <li><HashLink smooth className="dropdown-item" to="#">Dropdown 4</HashLink></li>
                <li><HashLink smooth className="dropdown-item" to="#">Dropdown 5</HashLink></li>
              </ul>

            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#contact">Contact</HashLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
