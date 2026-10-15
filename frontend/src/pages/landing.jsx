// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.css";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="landingPageContainer">
//       {/* Bootstrap Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light"
//        style={{padding: "2px 3px", minHeight: "35px"}}>
//         <div className="container-fluid">
//           {/* Brand */}
//           <div className='navHeader navbar-brand'>
//           <h2>Apna video call</h2>

//         </div>

//           {/* Hamburger button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible Menu */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button
//                   className="btn nav-link"
//                   onClick={() => navigate("/q23qsc")}
//                 >
//                   Join as Guest
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn nav-link"
//                   onClick={() => navigate("/auth")}
//                 >
//                   Register
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn nav-link"
//                   onClick={() => navigate("/auth")}
//                 >
//                   Login
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Landing Content */}
//       <div className="landingMainContainer d-flex flex-column flex-lg-row align-items-center">
//         <div className="text-center text-lg-start">
//           <h1>
//             <span style={{ color: "#FF9839" }}>Connect</span> with your loved
//             ones
//           </h1>
//           <p>Cover a distance by Apna video call</p>
//          <Link 
//   to="/auth" 
//   style={{
//     background: "#D97500",
//     color: "white",
//     width: "fit-content",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     marginTop: "1.9rem",
//     textDecoration: "none"
//   }}
// >
//   Get Started
// </Link>
//         </div>
//         <div className="mt-4 mt-lg-0">
//           <img src="/mobile.png" alt="App Preview" className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" // Dark theme mobile par accha dikhega text readability ke liye
       style={{ padding: "8px 16px", minHeight: "50px" }}>
        <div className="container-fluid">
          {/* Brand */}
          <Link to="/" className="navbar-brand m-0">
            <h2 className="m-0" style={{ fontSize: "1.5rem", fontWeight: "500", color: "white" }}>
              Apna video call
            </h2>
          </Link>

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
            <ul className="navbar-nav ms-auto gap-2 mt-2 mt-lg-0 text-center"> {/* Mobile me gap aur center alignment diya */}
              <li className="nav-item">
                <button
                  className="btn btn-outline-light w-100" // Mobile par achha button look diya
                  onClick={() => navigate("/q23qsc")}
                >
                  Join as Guest
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-light w-100"
                  onClick={() => navigate("/auth")}
                >
                  Register
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn text-white w-100"
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
      <div className="landingMainContainer container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between" style={{ minHeight: "85vh", padding: "2rem" }}>
        <div className="text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start">
          <h1 className="display-4 fw-bold"> {/* Responsive Heading */}
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved ones
          </h1>
          <p className="fs-5 opacity-75">Cover a distance by Apna video call</p>
          
          {/* Get Started Button Fixed */}
          <Link 
            to="/auth" 
            style={{
              display: "inline-block", // Isse padding aur margin sahi kaam karegi
              background: "#D97500",
              color: "white",
              width: "fit-content",
              padding: "12px 28px",
              borderRadius: "30px",
              marginTop: "1.5rem",
              textDecoration: "none",
              fontWeight: "600",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            Get Started
          </Link>
        </div>
        
        {/* Responsive Image Wrapper */}
        <div className="mt-5 mt-lg-0 text-center">
          <img 
            src="/mobile.png" 
            alt="App Preview" 
            className="img-fluid" 
            style={{ maxHeight: "60vh", objectFit: "contain" }} // Image zyada badi na ho mobile par
          />
        </div>
      </div>
    </div>
  );
}




