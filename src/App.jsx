import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  return (
    <>
      <div className="screen">
        <div className="sentence">
          <span className="words adjectiveOne">Bli</span>
          <span className="words nounOne">Bla</span>
          <span className="words verb">Blub</span>
          <span className="words adjectiveTwo">Möp</span>
          <span className="words nounTwo">Muh</span>
          <button className="button">Generiere!</button>
          <span className="question">🤔</span>
        </div>
      </div>
    </>
  );
}

export default App;
