function NavBar() {
  return (
    <nav className="navbar border-bottom border-bottom-dark">
      <div className="container navbar">
        ET-Cloudms
        <a className="nav-link" href="#">
          Dashboard
        </a>
        <a className="nav-link" href="#">
          Projects
        </a>
        <a className="nav-link" href="#">
          My Tasks
        </a>
        <a className="nav-link" href="#">
          Settings
        </a>
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
    </nav>
  );
}

export default NavBar;
