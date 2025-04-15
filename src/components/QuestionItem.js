import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers = [], correctIndex = 0 } = question;  

  const options = Array.isArray(answers) && answers.length > 0
    ? answers.map((answer, index) => (
        <option key={index} value={index}>
          {answer}
        </option>
      ))
    : <option>No answers available</option>;  // Provide fallback in case answers is empty

  function handleDeleteClick() {
    onDelete(id);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
