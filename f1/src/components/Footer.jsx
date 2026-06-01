import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{ marginTop: '90px' }}>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <Link to="/" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white"><i className="fa fa-book-reader mr-3"></i>EduFlow</h1>
              </Link>
              <p className="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet.</p>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="text-white mb-4">Newsletter</h3>
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Your Email Address" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope mr-2"></i>info@eduflow.com</p>
              <div className="d-flex justify-content-start mt-4">
                {['twitter', 'facebook-f', 'linkedin-in', 'instagram'].map(s => (
                  <a key={s} className="text-white mr-4" href="#"><i className={`fab fa-2x fa-${s}`}></i></a>
                ))}
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Our Courses</h3>
              <div className="d-flex flex-column justify-content-start">
                {['Web Design', 'Apps Design', 'Marketing', 'Research', 'SEO'].map(l => (
                  <Link key={l} to="/" className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>{l}</Link>
                ))}
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                {[
                  { label: 'Privacy Policy', to: '/' },
                  { label: 'Terms & Condition', to: '/' },
                  { label: 'Regular FAQs', to: '/' },
                  { label: 'Event Registration', to: '/events' },
                  { label: 'Elite Certificate', to: '/certificate' },
                ].map(l => (
                  <Link key={l.label} to={l.to} className="text-white-50 mb-2"><i className="fa fa-angle-right mr-2"></i>{l.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{ borderColor: 'rgba(256,256,256,.1)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">Copyright &copy; <Link className="text-white" to="/">EduFlow</Link>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">Powered by EduFlow Team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
