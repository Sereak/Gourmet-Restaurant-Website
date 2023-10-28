import React from "react";
import NavLink from "./NavLink";

const NavOverlay = ({ as }) => {
  return (
    <ul className="NavOverlay">
      {as.map((a, index) => (
        <li key={index}>
          <NavLink href={a.path} title={a.title} />
        </li>
      ))}
    </ul>
    
  );
};

export default NavOverlay;