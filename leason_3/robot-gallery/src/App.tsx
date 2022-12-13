import React from "react"
import logo from "./logo.svg"
import "./App.css"
import robots from "./mockdata/robots.json"
import Robot from "./components/Robot"

const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image'/>"
const jsHacked = "javascript: alert('Hacked!');"

// React組件的回傳值是JSX.Element，並透過ReactDOM的render去呈現畫面（在index.tsx）
function App() {
  return (
    <>
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
