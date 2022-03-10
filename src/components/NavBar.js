import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <nav className="bookNav">
        <ul>
          <li className="nav-name">Bookstore CMS</li>
          {links.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                to={path}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="avatar">
          <i className="fa fa-user" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
