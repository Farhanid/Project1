import { useEffect, useState } from 'react';

 const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed to', count);
  }, [count]); // runs every time count changes

  return (
    <button onClick={() => setCount(count + 1)}>Click: {count}</button>
  );
};
export default Counter;