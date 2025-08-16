import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light"
       style={{padding: "2px 3px", minHeight: "35px"}}>
        <div className="container-fluid">
          {/* Brand */}
          <div className='navHeader navbar-brand'>
          <h2>Apna video call</h2>

        </div>

          {/* Hamburger button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  onClick={() => navigate("/q23qsc")}
                >
                  Join as Guest
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  onClick={() => navigate("/auth")}
                >
                  Register
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  onClick={() => navigate("/auth")}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Landing Content */}
      <div className="landingMainContainer d-flex flex-column flex-lg-row align-items-center">
        <div className="text-center text-lg-start">
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance by Apna video call</p>
         <Link 
  to="/auth" 
  style={{
    background: "#D97500",
    color: "white",
    width: "fit-content",
    padding: "8px 16px",
    borderRadius: "20px",
    marginTop: "1.9rem",
    textDecoration: "none"
  }}
>
  Get Started
</Link>
        </div>
        <div className="mt-4 mt-lg-0">
          <img src="/mobile.png" alt="App Preview" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}


