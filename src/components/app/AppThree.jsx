import {useState} from "react"

const questons = [
  {
    title: "React - это?",
    variants: ["библиотека", "фреймворк", "приложение"],
    corrent: 0,
  },
  {
    title: "Компонент - это?",
    variants: ["приложение", "часть страницы", "не знаю"],
    corrent: 1,
  },
  {
    title: ".jsx - это?",
    variants: [
      "функция",
      "библиотека для HTML",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    corrent: 2,
  },
]

function Result() {
  return (
    <div className="result">
      <h2>Вы отгадали...</h2>
      <button>Попробовать снова</button>
    </div>
  )
}

function Progress({ queston }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>{queston.title}</h1>
      <ul>
        {queston.variants.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  )
}

export default function AppThree() {
  const [step, setStep] = useState(0)
  const queston = questons[step]

  return (
    <div className="App">
      <Progress queston={queston} />
      {/* <Result /> */}
    </div>
  )
}
