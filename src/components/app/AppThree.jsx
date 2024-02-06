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

function Progress() {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>Вопрос</h1>
      <ul>
        <li>вариант 1</li>
        <li>вариант 2</li>
        <li>вариант 3</li>
      </ul>
    </>
  )
}

export default function AppThree() {
  return (
    <div className="App">
      <Progress />
      {/* <Result /> */}
    </div>
  )
}
