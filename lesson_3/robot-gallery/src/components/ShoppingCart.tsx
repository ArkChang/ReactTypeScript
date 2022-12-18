import React from "react";
import styles from "./ShoppingCart.module.css";

// 數據傳遞設定
interface Props {

}

// 元件的狀態設定
interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State>{
    // 建構子
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen:false,
        };
    }

    render() {
        return (
        <div className={styles.cartContainer}>
            <button className={styles.button}
            onClick={()=> {
                this.setState({isOpen:!this.state.isOpen});
            }}
            >購物車2件</button>
            <div className={styles.cartDropDown} style={{
                display: this.state.isOpen ? "block" : "none"
            }}>
                <ul>
                    <li>robot 1</li>
                    <li>robot 2</li>
                </ul>
            </div>
        </div>
        );
    }


}

export default ShoppingCart;