import React from "react"
// 因為在react-app.d.ts已經定義好了，故不需要在custom.d.ts重複定義
import logo from "./assets/images/logo.svg"
import styles from "./App.module.css";
import robots from "./mockdata/robots.json"
import Robot from "./components/Robot"
import ShopingCart from "./components/ShoppingCart"

const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image'/>"
const jsHacked = "javascript: alert('Hacked!');"

// React組件的回傳值是JSX.Element，並透過ReactDOM的render去呈現畫面（在index.tsx）
function App() {
  return (
    <>
    {/* 加入CSS樣式 */}
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1>機器人拍賣online測試網站字數不足我再多補幾個字</h1>
      </div>
      <ShopingCart/>
    <div className={styles.robotList}>
      {robots.map((r) => (
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
  )
}

export default App
