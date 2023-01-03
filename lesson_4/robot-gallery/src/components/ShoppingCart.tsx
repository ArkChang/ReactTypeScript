import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";

// 數據傳遞設定
interface Props {}

// 元件的狀態設定
interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  // 建構子
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target :", e.target); // 事件發生的元素，範例：icon、文字
    console.log("e.currentTarget :", e.currentTarget); // 事件處理綁定的元素，範例：Button
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      //SPAN要大寫
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  // npm install react-icons 可以安裝預設圖片
  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>購物車 {value.shoppingCart.items.length}件</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen ? "block" : "none",
                }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCart;
