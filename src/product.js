import React from 'react';

const Product = React.memo(({ name, uuid, cartHandler }) => {
  console.log('ListItems');
  return (
    <>
      <div style={{ width: 100, backgroundColor: 'red' }}>
        {name} = {uuid}
      </div>
      <input type="submit" value="Cart" onClick={cartHandler} />
    </>
  );
});

export default Product;
