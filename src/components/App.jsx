import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="menu">
        <Button>app 1</Button>
        <Button>app 2</Button>
        <Button>app 3</Button>
        <Button>app 4</Button>
        <Button>app 5</Button>
        <Button>app 6</Button>
      </div>
    </>
  );
}

export default App;
