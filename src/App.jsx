import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
