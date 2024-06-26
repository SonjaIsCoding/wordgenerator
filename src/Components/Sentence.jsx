import { Adjectives } from "../assets/Adjectives";
import { Nouns } from "../assets/Nouns";
import { Verbs } from "../assets/Verbs";
// import "../App.css";
import "./Sentence.css";

export function Sentence(props) {
  return (
    <div className="generator-container">
      <span className="adjectiveOne">{props.adjectiveOne}</span>
      <span className="nounOne">{props.nounOne}</span>
      <span className="verb">{props.verb}</span>
      <span className="adjectiveTwo">{props.adjectiveTwo}</span>
      <span className="nounTwo">{props.nounTwo}</span>
    </div>
  );
}
