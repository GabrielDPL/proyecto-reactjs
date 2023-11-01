import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <Nav>
      <Link to="/cart" className="nav-link">
        <i className="fas fa-shopping-cart"></i> Cart (3)
      </Link>
    </Nav>
  );
};

export default CartWidget;