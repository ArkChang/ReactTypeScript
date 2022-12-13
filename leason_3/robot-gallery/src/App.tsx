import React from "react"
import logo from "./logo.svg"
import "./App.css"
import robots from "./mockdata/robots.json"
import Robot from "./components/Robot"

// React組件的回傳值是JSX.Element，並透過ReactDOM的render去呈現畫面（在index.tsx）
function App() {
  return (
    <ul>
      {robots.map((r) => (
        // 若參數屬性不同就會報錯
        <Robot id={r.id} email={r.email} name={r.name} />
      ))}
    </ul>
  )
}

export default App
