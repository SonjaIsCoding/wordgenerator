import { useState } from "react";
import "./App.css";
import { Sentence } from "./Components/Sentence";
import { Adjectives } from "./assets/Adjectives";
import { Nouns } from "./assets/Nouns";
import { Verbs } from "./assets/Verbs";
import { Button } from "./Components/Button";
import { Question } from "./Components/Question";

function App() {
  const [word, setWord] = useState("");

  let verb = Math.floor(Math.random() * Verbs.length + 1);
  let noun = Math.floor(Math.random() * Nouns.length + 1);
  let adjective = Math.floor(Math.random() * Adjectives.length + 1);

  return (
    <div className="container">
      <div className="grid-item-menu">
        <h1>Menu</h1>
      </div>
      <div className="grid-item-sentence">
        <Sentence
          adjectiveOne="Bli"
          nounOne="Bla"
          verb="Blub"
          adjectiveTwo="Möp"
          nounTwo="Muh"
        />
      </div>
      <div className="grid-item-generate-button">
        <Button />
      </div>
      <div className="grid-item-question">
        <Question />
      </div>
    </div>
  );
}

export default App;
