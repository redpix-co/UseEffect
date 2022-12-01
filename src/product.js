import React from 'react';

const Product = React.memo(({ name }) => {
  console.log('ListItems');
  return <div style={{ width: 100, backgroundColor: 'red' }}>{name}</div>;
});

export default Product;
