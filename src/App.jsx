import { useState } from "react";
import "./App.css";
import { Sentence } from "./Components/Sentence";
import { Adjectives } from "./assets/Adjectives";
import { Nouns } from "./assets/Nouns";
import { Verbs } from "./assets/Verbs";
import { Navbar } from "../src/Components/Navbar";
import useLocalStorage from "use-local-storage";
import { TbSunMoon } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import { BsQuestionOctagon } from "react-icons/bs";

function App() {
  const [words, setWords] = useState(generateAllWords);

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

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
      <div className="App" data-theme={theme}>
        <div className="container">
          <Sentence
            words={words}
            onSelectWord={(index) => {
              setWords(
                words.map((word, i) =>
                  i === index ? generateWord(index) : word
                )
              );
              console.log(index);
            }}
          />
          <button onClick={handleGenerator}>Generiere!</button>
          <button onClick={switchTheme}>
            Es werde {theme === "light" ? "Dunkelheit" : "Licht"}
          </button>
          <div
            data-tooltip-id="explanation"
            data-tooltip-content="Exquisite Corpse ist eine im Surrealismus entwickelte spielerische Methode, 
            dem Zufall bei der Entstehung von Texten und Bildern Raum zu geben. "
          >
            <BsQuestionOctagon />
          </div>
          <Tooltip id="explanation" />
        </div>
      </div>
    </>
  );
}

export default App;
