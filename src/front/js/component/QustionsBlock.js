import React, { forwardRef } from "react";
import QuestionBlock from "./QuestionBlock";

export default forwardRef(function QuestionsBlock({
  quizItem,
  setChosenAnswer,
  chosenAnswer,
  setUnansweredId,
  unansweredId,
}, ref) {

  return (
    <div>
      <h2 ref={ref} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem.questions.map((question, index) => (
          <QuestionBlock
            key={index}
            question={question}
            quizItemId={quizItem.id}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            setUnansweredId={setUnansweredId}
            unansweredId={unansweredId}
          />
        ))}
      </div>
    </div>
  );
})
