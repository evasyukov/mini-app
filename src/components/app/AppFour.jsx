import { useState } from "react"
import Button from "../Button"

const calcButton = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "0" },
  { value: "=" },
  { value: "+" },
  { value: "-" },
  { value: "*" },
  { value: "/" },
]

export default function AppFour() {
  const [count, setCount] = useState(0)

  function numberInput() {}

  return (
    <>
      <h3>калькулятор</h3>
      <input
        style={{ marginBottom: "1rem" }}
        defaultValue={count}
        type="text"
        id="calc"
      />
      <div>
        {calcButton.map((item) => (
          <Button onClick={() => numberInput(item.value)} key={item}>
            {item.value}
          </Button>
        ))}
      </div>
    </>
  )
}
