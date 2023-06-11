import React from "react";

export default function QuestionBlock({
  question,
  quizItemId,
  setChosenAnswer,
  chosenAnswer,
  unansweredId,
  setUnansweredId,
}) {
  const handleClick = () => {
    setChosenAnswer((prevState) => [...prevState, question.text]);
    setUnansweredId(unansweredId.filter((id) => id !== quizItemId));
  };

  const validPick =
    !chosenAnswer?.includes(question.text) &&
    !unansweredId?.includes(quizItemId);
  return (
    <div>
      <button
        className="question-block"
        onClick={handleClick}
        disabled={validPick}
      >
        <img
          src={question.image}
          alt={question.alt}
          height="190px"
          width="100%"
        />
        <h3>{question.text}</h3>
        <p>
          <a href={question.image}>{question.credit} </a>
        </p>
      </button>
    </div>
  );
}
