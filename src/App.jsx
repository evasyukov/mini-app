import { useState } from "react";

import "../src/css/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="menu">
        <div className="menu-button">
          <a href="">app 1</a>
        </div>
      </div>
    </>
  );
}

export default App;
