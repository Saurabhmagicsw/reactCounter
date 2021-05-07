import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);
  const onClicked = () => {
    setcount(count + 1);
  };
  const onClickedDic = () => {
    if (count > 0) setcount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={onClicked}>click-me + </button>
      <button onClick={onClickedDic}>click-me - </button>
    </div>
  );
}
