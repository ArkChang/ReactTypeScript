import React from "react";
// 因為在react-app.d.ts已經定義好了，故不需要在custom.d.ts重複定義
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShopingCart from "./components/ShoppingCart";

const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image'/>";
const jsHacked = "javascript: alert('Hacked!');";

interface Props {}
interface State {
  robotGallery: any;
  asynchronousCount: number;
  synchronousCount: number;
  lifeCircleCount: number;
  lifeCircleOKCount: number;
}

// React組件的回傳值是JSX.Element，並透過ReactDOM的render去呈現畫面（在index.tsx）
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      asynchronousCount: 0,
      synchronousCount: 0,
      lifeCircleCount: 0,
      lifeCircleOKCount: 0,
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  render() {
    return (
      <>
        {/* 加入CSS樣式 */}
        <div className={styles.app}>
          <div className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            <h1>機器人拍賣online測試網站字數不足我再多補幾個字</h1>
          </div>
          {/* state 非同步計數方式 */}
          <div>打開Console，可以看到計數與畫面數字不同</div>
          <div>
            <button
              onClick={() => {
                this.setState({
                  asynchronousCount: this.state.asynchronousCount + 1,
                });
                console.log(
                  "asynchronousCount :",
                  this.state.asynchronousCount
                );
              }}
            >
              Click AsynchronousCount
            </button>
            <span>asynchronousCount:{this.state.asynchronousCount}</span>
          </div>

          {/* state 同步計數方式 */}
          <div>
            <button
              onClick={() => {
                this.setState(
                  {
                    synchronousCount: this.state.synchronousCount + 1,
                  },
                  () => {
                    console.log(
                      "synchronousCount :",
                      this.state.synchronousCount
                    );
                  }
                );
              }}
            >
              Click SynchronousCount
            </button>
            <span>synchronousCount:{this.state.synchronousCount}</span>
          </div>

          {/* state 同步計數方式，生命週期內只會讀取舊的數值 */}
          <div>
            <button
              onClick={() => {
                this.setState(
                  {
                    lifeCircleCount: this.state.lifeCircleCount + 1,
                  },
                  () => {
                    console.log(
                      "lifeCircleCount :",
                      this.state.lifeCircleCount
                    );
                  }
                );
                this.setState(
                  {
                    lifeCircleCount: this.state.lifeCircleCount + 1,
                  },
                  () => {
                    console.log(
                      "lifeCircleCount :",
                      this.state.lifeCircleCount
                    );
                  }
                );
              }}
            >
              Click lifeCircleCount
            </button>
            <span>lifeCircleCount:{this.state.lifeCircleCount}</span>
          </div>

          {/* state 同步計數方式，在生命週期內用函式的方式計數，數字就會增加 */}
          <div>
            <button
              onClick={() => {
                this.setState(
                  (preState, preProps) => {
                    return {
                      lifeCircleOKCount: preState.lifeCircleOKCount + 1,
                    };
                  },
                  () => {
                    console.log(
                      "lifeCircleOKCount :",
                      this.state.lifeCircleOKCount
                    );
                  }
                );
                this.setState(
                  (preState, preProps) => {
                    return {
                      lifeCircleOKCount: preState.lifeCircleOKCount + 1,
                    };
                  },
                  () => {
                    console.log(
                      "lifeCircleOKCount :",
                      this.state.lifeCircleOKCount
                    );
                  }
                );
              }}
            >
              Click lifeCircleOKCount
            </button>
            <span>lifeCircleOKCount:{this.state.lifeCircleOKCount}</span>
          </div>

          <ShopingCart />
          <div className={styles.robotList}>
            {this.state.robotGallery.map((r) => (
              // 若參數屬性不同就會報錯
              <Robot id={r.id} email={r.email} name={r.name} />
            ))}
          </div>
        </div>

        {/* JSX若使用{}來使用變數，可以避免XSS攻擊，React會自動轉譯成文字顯示 */}
        <div>{html}</div>
        {/* 但是若駭客使用函式攻擊，則無法避免XSS攻擊 */}
        <a href={jsHacked}>My websit</a>
        <ul>
          {robots.map((r) => (
            // 若參數屬性不同就會報錯
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
