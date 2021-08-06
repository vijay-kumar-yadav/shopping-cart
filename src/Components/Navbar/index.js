import React from 'react';
import { AiOutlineHome, AiOutlineUnorderedList } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';
import { FaShopify } from 'react-icons/fa';
import { Bars, Nav, NavLink, NavMenu } from './Navbar.Styled';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 style={{ color: 'white', fontSize: '2em' }}>
            <FaShopify size="1.2em" color="white" /> Shoppify
          </h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/Home" style={{ textDecoration: 'none' }}>
            <AiOutlineHome size="1.4em" /> Home
          </NavLink>
          <NavLink to="/Category" style={{ textDecoration: 'none' }}>
            <AiOutlineUnorderedList size="1.4em" />
            Category
          </NavLink>
          <NavLink to="/Checkout" style={{ textDecoration: 'none' }}>
            <IoBagCheckOutline size="1.4em" /> Checkout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
