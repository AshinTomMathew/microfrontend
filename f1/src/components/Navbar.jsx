import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand ml-lg-3">
          <h1 className="m-0 text-uppercase text-primary">
            <i className="fa fa-book-reader mr-3"></i>EduFlow
          </h1>
        </Link>
        <button type="button" className="navbar-toggler" onClick={() => setOpen(o => !o)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse justify-content-between px-lg-3 ${open ? 'show' : 'collapse'}`}>
          <div className="navbar-nav mx-auto py-0">
            <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home / Categories</Link>
            <Link to="/events" className={`nav-item nav-link ${isActive('/events')}`}>Event Speakers</Link>
            <Link to="/certificate" className={`nav-item nav-link ${isActive('/certificate')}`}>Elite Certificate</Link>
          </div>
          <Link to="/events" className="btn btn-primary py-2 px-4 d-none d-lg-block">Join Event</Link>
        </div>
      </nav>
    </div>
  );
}
