import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const menu_items = [
  { title: "Principal", link: "/" },
  { title: "Sobre", link: "/about" },
  { title: "Contato", link: "/contact" },
];

const log_items = [
  { title: "Entrar", link: "/login" },
  { title: "Registro", link: "/register" },
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
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {menu_items.map((item) => (
              <li className="nav-item px-2">
                <Link className="nav-link active" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          {log_items.map((item) => (
            <div className="col">
              <Link to={item.link}>
                <button type="button" className="btn btn-outline-light px-2">
                  <span className="p-3">{item.title}</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
