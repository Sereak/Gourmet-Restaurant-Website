import React, { useState } from "react";
import NavLink from "./NavLink";
import NavOverlay from "./NavOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Order",
    path: "https://www.doordash.com/home/",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="NavSection">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="NavContainer">
        <div className="NavMobileMenu">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="NavOpen">
              <i class='bx bx-menu'></i>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)} className="NavOpen">
              <i class='bx bx-x'></i>
            </button>
          )}
          
        </div>
        <div className="NavTextContainer" id="navbar">
          <ul className="NavList">
            {navLinks.map((a, index) => (
              <li key={index}>
                <NavLink href={a.path} title={a.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {navbarOpen ? <NavOverlay as={navLinks} /> : null}
      
      
    </nav> 
  );
};

export default NavBar;