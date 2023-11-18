import uniqid from "uniqid";
import { NavLink } from "react-router-dom";

const nav_items = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/services", title: "Services" },
  { url: "/contact", title: "Contact" }
];

const NavigationBar = () => {
  return (
    <nav className="sidebar__navigation">
      <ul className="navigation__menu">
        {nav_items.map(({ title, url }) => (
          <li key={uniqid()} className="menu__item">
            <NavLink to={url} activeClassName="active-link">
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
