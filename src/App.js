// avoid this function recreation [CALLBACK]
// pure funciton as memo in hooks [MEMO]

import React, { useState, useEffect, useCallback } from 'react';
import Product from './product.js';
import './style.css';

export default function App() {
  const [data, setData] = useState(['Item1', 'Item2']);
  const [count, setCount] = useState(0);
  const [cb, setCb] = useState(0);
  // useEffect(() => {});
  //
  const cartHandler = () => {
    setCb(cb + 1);
  };

  var listItem = data.map((item, key) => {
    return (
      <Product name={item} key={key} uuid={cb} cartHandler={cartHandler} />
    );
  });

  const buttonHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* {listItem} */}
      <input type="submit" onClick={() => setCount(count + 1)} />
      {listItem}
      {count}
      {/* {data.map((item, key) => {
        return <Product name={item} key={key}/>;
       })} */}
    </div>
  );
}

// export const Product = (props) => {
//   console.log('Item Console');
//   return <div style={{ width: 100, backgroundColor: 'red' }}>{props.name}</div>;
// };
