import { Adjectives } from "../assets/Adjectives";
import { Nouns } from "../assets/Nouns";
import { Verbs } from "../assets/Verbs";
import "../App.css";

export function Sentence(props) {
  return (
    <div className="generator-container">
      <span className="word adjectiveOne">{props.adjectiveOne}</span>
      <span className="word nounOne">{props.nounOne}</span>
      <span className="word verb">{props.verb}</span>
      <span className="word adjectiveTwo">{props.adjectiveTwo}</span>
      <span className="word nounTwo">{props.nounTwo}</span>
    </div>
  );
}
