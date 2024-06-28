import { useState } from "react";
import "./App.css";
import { Sentence } from "./Components/Sentence";
import { Adjectives } from "./assets/Adjectives";
import { Nouns } from "./assets/Nouns";
import { Verbs } from "./assets/Verbs";
import { Navbar } from "../src/Components/Navbar";

function App() {
  const [word, setWord] = useState("");

  let verb = Math.floor(Math.random() * Verbs.length + 1);
  let noun = Math.floor(Math.random() * Nouns.length + 1);
  let adjective = Math.floor(Math.random() * Adjectives.length + 1);

  return (
    <>
      <Navbar />
      <div className="container">
        <Sentence
          adjectiveOne="Bli"
          nounOne="Bla"
          verb="Blub"
          adjectiveTwo="Möp"
          nounTwo="Muh"
        />

        <button>Generiere!</button>

        <div>?</div>
      </div>
    </>
  );
}

export default App;
