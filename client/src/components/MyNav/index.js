import React, { useState } from 'react';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Google Books</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Saved</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default MyNav;