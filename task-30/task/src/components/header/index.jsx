import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="navigation">
        <div className="site-bar">
        <div className="container">
          <div className="d-flex site-head justify-between align-center">
            <div className="col-lg-2">
              <div className="logo">
                <i className="fa-solid fa-film company"></i>
                <p>Your Film Site</p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="menu">
                <li className="menu-items">Home</li>
                <li className="menu-items">About</li>
                <li className="menu-items">Films</li>
                <li className="menu-items">Tickets</li>
              </ul>
            </div>
            <div className="col-lg-1">
              <div className="contact">
                <i className="fa-brands fa-instagram social-icons"></i>
                <i className="fa-brands fa-twitter social-icons"></i>
                <i className="fa-brands fa-facebook social-icons"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
