import { useState } from "react";

function TextRepeaterButton () {
  const [repetitions, setRepetitions] = useState(1);
  const textArea = [];
  for (let i = 0; i < repetitions; i++) {
    textArea.push(<span key={i}>I like this text</span>);
  }

  return (
  <button className="TextRepeaterButton">
    {textArea}
  </button>
  );
}

export default TextRepeaterButton;