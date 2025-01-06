import { useState } from "react";
import styles from "./App.module.scss";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, SCSS Modules!</h1>
      <button
        className={styles.button}
        onClick={() => setCount((cur) => cur + 1)}
      >
        Click Me
      </button>
      <p className={styles.count}>{count}</p>
    </div>
  );
};

export default App;
