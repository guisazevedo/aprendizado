import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const menu_items = [
  { title: "Principal", link: "/" },
  { title: "Sobre", link: "/about" },
];

const log_items = [
  { title: "Log-in", link: "/login" },
  { title: "Sign-up", link: "/register" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          <span>
            <i className="bi bi-compass h1"></i>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            {menu_items.map((item) => (
              <li className="nav-item px-2" key={item.title}>
                <Link className="nav-link active" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item m-2">
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-light text-dark px-2 w-100"
                >
                  <span className="p-3">{log_items[0].title}</span>
                </button>
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-light px-2 w-100"
                >
                  <span className="p-3">{log_items[1].title}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
