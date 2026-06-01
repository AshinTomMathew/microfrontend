import { Link } from 'react-router-dom';

export default function PageHeader({ title }) {
  return (
    <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{ marginBottom: '90px' }}>
      <div className="container text-center py-5">
        <h1 className="text-white display-1">{title}</h1>
        <div className="d-inline-flex text-white mb-5">

          <p className="m-0 text-uppercase">{title}</p>
        </div>

      </div>
    </div>
  );
}
