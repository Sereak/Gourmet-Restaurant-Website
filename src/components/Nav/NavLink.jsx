const NavLink = ({ href, title }) => {
    return (
      <a
        href={href}
        className="NavLink"
      >
        {title}
      </a>
    );
  };
  
  export default NavLink;