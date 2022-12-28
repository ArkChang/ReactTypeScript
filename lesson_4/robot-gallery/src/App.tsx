import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShopingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any;
  count: number;
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);

  useEffect(() => {
    document.title = `點擊${count}次`;
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobotGallery(data));
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>機器人拍賣online測試網站字數不足我再多補幾個字</h1>
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>Count:{count}</span>

      <ShopingCart />
      <div className={styles.robotList}>
        {robotGallery.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
