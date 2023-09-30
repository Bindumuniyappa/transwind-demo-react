import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";


function NavBar() {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/"); // Replaced history.push("/login");
  }, [logout]);

  
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            Transwind Technologies Pvt ltd
          </NavLink>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <button onClick={logoutHandler} className="btns">
        Logout
      </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;