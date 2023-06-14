function Heading() {
  return (
    <div className="container">
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand">
          <h2>Projects</h2>
          <h6>View and manage products</h6>
        </a>
        <ul className="nav nav-pills">
          <button className="btn btn-primary me-md-2 bi bi-plus" type="button">
            Add New Project
          </button>
        </ul>
      </nav>
      <div className="btn-group" role="group">
        <button className="btn me-2 bg-white btn-outline-secondary dropdown-toggle">
          Project Name
        </button>
        <button className="btn me-2 bg-white btn-outline-secondary dropdown-toggle">
          Status
        </button>
      </div>
    </div>
  );
}

export default Heading;
