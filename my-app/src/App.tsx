import styles from './App.module.scss';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Counter />
      </header>
    </div>
  );
}

export default App;
