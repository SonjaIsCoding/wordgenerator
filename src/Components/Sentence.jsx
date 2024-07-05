import { Adjectives } from "../assets/Adjectives";
import { Nouns } from "../assets/Nouns";
import { Verbs } from "../assets/Verbs";
import "../App.css";
import "./Sentence.css";

export function Sentence({ words, onSelectWord }) {
  return (
    <div className="generator-container">
      <span onClick={() => onSelectWord(0)} className="word adjectiveOne">
        {words[0]}
      </span>
      <span onClick={() => onSelectWord(1)} className="word nounOne">
        {words[1]}
      </span>
      <span onClick={() => onSelectWord(2)} className="word adjectiveTwo">
        {words[2]}
      </span>
      <span onClick={() => onSelectWord(3)} className="word verb">
        {words[3]}
      </span>
      <span onClick={() => onSelectWord(4)} className="word nounTwo">
        {words[4]}
      </span>
    </div>
  );
}
