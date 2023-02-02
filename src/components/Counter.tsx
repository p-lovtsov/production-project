import { useEffect, useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (count > 300) {
        setMultiplier(-1);
      }

      if (count < 0) {
        setMultiplier(1);
      }

      setCount(count + (1 * multiplier));
    }, 50);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
      <button onClick={decrement} className={classes.btn}>
        decrement
      </button>
    </div>
  );
};
