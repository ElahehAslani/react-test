import { useState } from "react";

import styles from "./Counter.module.scss";

export default function Counter(){
  const [counter, setCounter ] = useState(0);
  return(
    <section className={styles.counter}>
      <button onClick={()=> setCounter(counter + 1)}> + </button>
      <span>{counter}</span>
      <button onClick={()=> setCounter(counter - 1)}> - </button>
    </section>
  );
}