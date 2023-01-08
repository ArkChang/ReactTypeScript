import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import RobotDiscount from "./components/RobotDiscount";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `點擊${count}次`;
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();

        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    };
    fetchData();
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
      {error && error !== "" && <div>網站出錯：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 == 0 ? (
              <Robot id={r.id} email={r.email} name={r.name} />
            ) : (
              <RobotDiscount id={r.id} email={r.email} name={r.name} />
            )
          )}
        </div>
      ) : (
        <h2>Loading 讀取中</h2>
      )}
    </div>
  );
};

export default App;
