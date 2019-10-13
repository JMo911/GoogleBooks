import React from 'react';
import './style.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const MyNav = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Google Books</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved">Saved</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default MyNav;