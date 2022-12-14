import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { useAddToCart } from "../components/AddToCart";

// 定義傳入參數的格式類型
interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart();

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
      <button onClick={() => addToCart(id, name)}>加入購物車</button>
    </div>
  );
};

export default RobotDiscount;
