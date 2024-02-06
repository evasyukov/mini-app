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

export default function AppThree() {
  return <h3>Опросник</h3>
}
