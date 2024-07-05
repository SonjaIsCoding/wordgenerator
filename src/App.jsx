import { useState } from "react";
import "./App.css";
import { Sentence } from "./Components/Sentence";
import { Adjectives } from "./assets/Adjectives";
import { Nouns } from "./assets/Nouns";
import { Verbs } from "./assets/Verbs";
import { Navbar } from "../src/Components/Navbar";

function App() {
  const [words, setWords] = useState(generateAllWords);

  function generateWord(index) {
    if (index === 0 || index === 3) {
      return Adjectives[Math.floor(Math.random() * Adjectives.length + 1)];
    }
    if (index === 1 || index === 4) {
      return Nouns[Math.floor(Math.random() * Nouns.length - 1)];
    }
    return Verbs[Math.floor(Math.random() * Verbs.length - 1)];
  }

  function generateAllWords() {
    let word1 = Adjectives[Math.floor(Math.random() * Adjectives.length + 1)];
    let word2 = Nouns[Math.floor(Math.random() * Nouns.length - 1)];
    let word3 = Verbs[Math.floor(Math.random() * Verbs.length - 1)];
    let word4 = Adjectives[Math.floor(Math.random() * Adjectives.length + 1)];
    let word5 = Nouns[Math.floor(Math.random() * Nouns.length - 1)];
    return [word1, word2, word3, word4, word5];
  }

  function handleGenerator() {
    setWords(generateAllWords());
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Sentence
          words={words}
          onSelectWord={(index) => {
            setWords(
              words.map((word, i) => (i === index ? generateWord(index) : word))
            );
            console.log(index);
          }}
        />
        <button onClick={handleGenerator}>Generiere!</button>

        <div>?</div>
      </div>
    </>
  );
}

export default App;
