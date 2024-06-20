import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState[""];

  return (
    <>
      <div className="screen">
        <div className="sentence">
          <span className="words">Bli</span>
          <span className="words">Bla</span>
          <span className="words">Blub</span>
          <span className="words">Möp</span>
          <span className="words">Muh</span>
          <button className="button">Generiere!</button>
          <span className="question">🤔</span>
        </div>
      </div>
    </>
  );
}

export default App;
