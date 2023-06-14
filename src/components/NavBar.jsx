function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-background">
      <div className="container navbar-background">
        <a className="navbar-brand navbar-background" href="#">
          ET-Cloudms
        </a>
        <div className="collapse navbar-collapse navbar-background">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-background">
            <li className="nav-item navbar-background">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item navbar-background">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item navbar-background">
              <a className="nav-link" href="#">
                My Tasks
              </a>
            </li>
            <li className="nav-item navbar-background">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
          </ul>
          <form className="d-flex navbar-background" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button type="button" className="btn position-relative">
              <i className="bi bi-bell"></i>
              <span
                className="position-absolute start-5 tag-font-size translate-middle badge rounded-pill bg-danger"
                aria-label="Close"
              >
                9+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <a
              className="nav-link dropdown-toggle mt-2"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Rajkumar(Admin)
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
