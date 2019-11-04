import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const activeLink = {
    background: "darkblue"
  }

  return (
    <div className="navbar">
      <NavLink exact to="/" style={link} activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink exact to="/movies" style={link} activeStyle={activeLink} >
        Movies
      </NavLink>
      <NavLink exact to="/directors" style={link} activeStyle={activeLink} >
        Directors
      </NavLink>
      <NavLink exact to="/actors" style={link} activeStyle={activeLink} >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
