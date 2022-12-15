import React from "react"
import styles from "./Robot.module.css"

// 定義傳入參數的格式類型
interface RobotProps {
  id: number
  name: string
  email: string
}

// FC是functional component 函數式組件
// props是React.ReactNode型態
const Robot: React.FC<RobotProps> = (props) => {
  const id = props.id
  const name = props.name
  const email = props.email
  return (
    <li>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

const Robot_ES6: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      {/* `符號(~按鈕)是有變數，'符號是定值 */}
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot_ES6
