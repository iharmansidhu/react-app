function Table({ data }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Project Description</th>
            <th scope="col">Status</th>
            <th scope="col">Created Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{obj.name}</td>
              <td>{obj.description}</td>
              <td>
                <button type="button" className="btn btn-success">
                  {obj.status}
                </button>
              </td>
              <td>{obj.createdDate}</td>
              <td>
                <i className="bi bi-eye me-4"></i>
                <i className="bi bi-pencil me-4"></i>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Table;
