import React from 'react';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
 return (
    <Container>
      <h1>{greeting}</h1>
    </Container>
 );
};

export default ItemListContainer;