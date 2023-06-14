function Table() {
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
          <tr>
            <th scope="row">1</th>
            <td>Synup</td>
            <td>Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Synup</td>
            <td>Some description goes here</td>
            <td>
              <button type="button" className="btn btn-primary">
                Inactive
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>LSQ</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-primary">
                Inactive
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>LSQ</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>CCD</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>CCD</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Delta</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Delta</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Echo</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Echo</td>
            <td> Some description goes here</td>
            <td>
              <button type="button" className="btn btn-success">
                Active
              </button>
            </td>
            <td>13/12/2023 10:30 AM</td>
            <td>
              <i className="bi bi-eye me-4"></i>
              <i className="bi bi-pencil me-4"></i>
              <i className="bi bi-trash"></i>
            </td>
          </tr>
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
